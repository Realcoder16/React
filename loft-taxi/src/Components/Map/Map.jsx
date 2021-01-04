import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { route, getAddressList, getProfile } from "../../action";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { isEqual, values, isEmpty } from "lodash";

class Map extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { to: "", from: "" };
    const { dispatch } = props;
  }

  handleMapState = (event) => {
    const { to, from } = this.state;
    event.preventDefault();
    this.props.dispatch(route({ to, from }));
  };

  drawRoute = (map, coordinates) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
    }
    if (map.getSource("route")) {
      map.removeSource("route");
    }

    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  componentDidMount() {
    const { dispatch, token } = this.props;
    dispatch(getAddressList());
    dispatch(getProfile(token));

    mapboxgl.accessToken =
      "pk.eyJ1IjoicmVhbGNvZGVyMTYiLCJhIjoiY2toejgyZXYwMDg0ZzJycWtucWNzaDg4OCJ9.x9kh7bQkbm9kSFwAxHYwAg";
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.1, 60], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.coordinates, prevProps.coordinates)) {
      this.drawRoute(this.map, this.props.coordinates);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: "0px",
      bottom: 0,
      width: "100%",
    };

    const { to, from } = this.state;
    const { addresses, profile } = this.props;

    const isProfileFilled = values(profile).every((value) => !isEmpty(value));

    return (
      <div className="map-wrapper">
        <div
          className="map"
          data-testid="map"
          style={style}
          ref={(el) => (this.mapContainer = el)}
        />
        <>
          <form className="taxi">
            <Paper className="paper">
              {!isProfileFilled ? (
                <p>
                  Пожалуйста, заполните профиль{" "}
                  <Button>
                    <Link to="/profile">Перейти</Link>
                  </Button>
                </p>
              ) : (
                <>
                  <label htmlFor="from">Откуда</label>
                  <Select
                    value={from}
                    onChange={(event) =>
                      this.setState({ from: event.target.value })
                    }
                  >
                    {addresses
                      .filter((address) => address !== to)
                      .map((address) => (
                        <MenuItem key={address} value={address}>
                          {address}
                        </MenuItem>
                      ))}
                  </Select>
                  <label htmlFor="to">Куда</label>

                  <Select
                    value={to}
                    onChange={(event) =>
                      this.setState({ to: event.target.value })
                    }
                  >
                    {addresses
                      .filter((address) => address !== from)
                      .map((address) => (
                        <MenuItem key={address} value={address}>
                          {address}
                        </MenuItem>
                      ))}
                  </Select>

                  <button type="submit" onClick={this.handleMapState}>
                    Вызвать такси
                  </button>
                </>
              )}
            </Paper>
          </form>
        </>
      </div>
    );
  }
}

export default connect((state) => ({
  coordinates: state.map,
  addresses: state.address,
  profile: state.profile,
  token: state.auth.token,
}))(Map);

import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { route, addressList } from "./action";

class Map extends Component {
  //как сюда передать mapIn из profile, чтобы при значении false запретить доступ к этой стринице?
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { to: "", from: "" };
    const { dispatch } = props;
  }

  callAddress(event) {
    //эта функция должна получить address c сервера в виде массива и передать его из redux state в props в элемене Map через connect(). Она вызывается по click на поле to и from
    event.preventDefault();
    this.dispatch(addressList); // dispatch виден в props, но он не определяется, undefined.
  }

  //здесь должен появиться props address, приконектенный из state, который должен передать данные в поля to и from в Input в виде выпадающего списка. Я его не знаю, как реализовать.

  handleMapState(event) {
    // эта функция должна передать выбранные в поле из массива address values to и from через action, и у нас появляется еще один props - coordinates, который будет потреблять функциональный элемент drawRoute и строить маршрут
    const { to, from } = event.target;
    event.preventDefault();
    this.dispatch(route({ to, from })); // dispatch виден в props, но он не определяется, undefined.
  }

  drawRoute = (map, coordinates) => {
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
    if (this.props.coordinate !== prevProps.coordinate) {
      this.drawRoute(this.map, this.props.coordinate);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: "100px",
      bottom: 0,
      width: "100%",
    };

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
            <label htmlFor="from">Откуда</label>
            <input
              id="from"
              type="from"
              name="from"
              size="28"
              onClick={this.callAddress}
              onChange={(event) => this.setState({ from: event.target.value })}
            />
            <label htmlFor="to">Куда</label>
            <input
              id="to"
              type="to"
              name="to"
              size="28"
              onClick={this.callAddress}
              onChange={(event) => this.setState({ to: event.target.value })}
            />
            <button type="submit" onClick={this.handleMapState}>
              Вызвать такси
            </button>
          </form>
        </>
      </div>
    );
  }
}

export default connect((state) => ({
  coordinate: state.route,
  address: state.address,
}))(Map);

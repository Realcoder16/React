import React from "react";
import mapboxgl from "mapbox-gl";
import { Header } from "./Header";

export class Map extends React.Component {
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

    return <div style={style} ref={(el) => (this.mapContainer = el)} />;
  }
}

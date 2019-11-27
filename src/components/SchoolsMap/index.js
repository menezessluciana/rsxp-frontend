import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class SchoolsMap extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        style={{
          position: "relative",
          height: '500px',
        }}
      >
        <Map style={{}} google={this.props.google} zoom={14}>
        <Marker
            title={'Escola Anglo.'}
            name={'EA'}
            position={{lat: 37.778519, lng: -122.405640}} />
        <Marker
            title={'Escola Integral'}
            name={'EI'}
            position={{lat: 37.759703, lng: -122.428093}} />
        <Marker
            title={'Escola Objetivo'}
            name={'EO'}
            position={{lat: 37.779703, lng: -122.428003}} />
        <Marker />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3.30"
})(SchoolsMap);

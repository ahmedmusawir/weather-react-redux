import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleKey = 'AIzaSyCLPeaPHJFYJCR0xKMI-0aGPZpuc2aru8U';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.52,
      lng: -119.81,
    },
    zoom: 12,
  };
  constructor(props) {
    super(props);
    this.center = {
      lat: this.props.lat,
      lng: this.props.lng,
    };
    this.zoom = 12;
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '200px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent text="Kreyser Avrora" />
          {/* <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text="Kreyser Avrora" /> */}
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

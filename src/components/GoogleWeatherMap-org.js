import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const GoogleWeatherMap = (props) => {
  const { lat, lon } = props;
  return (
    <div>
      <GoogleMapLoader
        containerElement={<div style={{ height: '100%' }} />}
        googleMapElement={<GoogleMap defaultZoom={12} defaultCenter={{ lat, lng: lon }} />}
      />
    </div>
  );
};

export default GoogleWeatherMap;

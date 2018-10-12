import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Chart from '../components/Chart';
import DefaultImage from '../default-image.png';
import GoogleMap from '../components/MyGoogleMap';

export class WeatherList extends Component {
  static propTypes = {};

  renderWeather = (cityData) => {
    if (cityData === undefined) {
      //inline style, not used
      const errorStyle = {
        width: '100%',
      };
      return (
        <tr className="error" role="alert">
          <td>No Data Found... Plz check the City Name spelling and try again.</td>
        </tr>
      );
    } else {
      const { name } = cityData.city;
      const temps = cityData.list.map((weather) => weather.main.temp);
      const tempsColor = 'red';
      const humidity = cityData.list.map((weather) => weather.main.humidity);
      const humidityColor = 'yellow';
      const pressure = cityData.list.map((weather) => weather.main.pressure);
      const pressureColor = 'white';
      const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;
      const center = {
        lat: lat,
        lng: lon,
      };

      return (
        <tr key={name} className="animated slideInLeft">
          {/* <td>
            {name} {lon} {lat}
          </td> */}
          <td>
            <GoogleMap center={center} zoom={12} />
          </td>
          <td>
            <Chart data={temps} color={tempsColor} units="K" />
          </td>
          <td>
            <Chart data={pressure} color={pressureColor} units="hPa" />
          </td>
          <td>
            <Chart data={humidity} color={humidityColor} units="%" />
          </td>
        </tr>
      );
    }
  };

  render() {
    // console.log(`WeatherList Render ${this.props.weather[0]}`);
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
        <figure>
          <img src={DefaultImage} alt="" />
        </figure>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);

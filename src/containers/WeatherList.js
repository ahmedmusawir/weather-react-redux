import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chart from '../components/Chart';
import DefaultImage from '../default-image.png';
import GoogleMap from '../components/MyGoogleMap';
import { withState } from 'recompose';

export class WeatherList extends Component {
  static propTypes = {
    weather: PropTypes.array.isRequired,
  };

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
    const textColor = {
      color: '#e3e3e3',
    };
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
        <h5 style={textColor}>
          The following is a demo result of the 5 day weather forecast of Atlanta city. Type your
          favorite city name above and click the 'Get Weather' button to get similar weather
          forecast.
        </h5>
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

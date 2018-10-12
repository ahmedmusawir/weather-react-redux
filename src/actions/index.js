import axios from 'axios';

const API_KEY = '72aa3d2004ec1e3ac8a4900f7d39c447';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('The URL:', url);
  // console.log('Request From Action:', request);

  return {
    type: 'FETCH_WEATHER',
    payload: request,
  };
};

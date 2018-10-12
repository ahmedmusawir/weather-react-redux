import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  // following Keys reflect in Global State
  weather: WeatherReducer,
});

export default rootReducer;

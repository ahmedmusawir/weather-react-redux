import { FETCH_WEATHER } from '../actions/index';

const reducerWeather = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      // console.log(action.payload.headers);
      return [action.payload.data, ...state];

    default:
      return state;
  }
};

export default reducerWeather;

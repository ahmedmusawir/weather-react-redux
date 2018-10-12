import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // following Keys reflect in Global State
  state: (state = {}) => state,
});

export default rootReducer;

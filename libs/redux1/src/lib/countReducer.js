import { combineReducers } from 'redux';

const INITIAL_STATE = {
  count: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INC_COUNT':
      return Object.assign({}, state, {
        count: action.count
      });

    case 'DEC_COUNT':
      return Object.assign({}, state, {
        count: action.count,
      });

    default:
      return state;
  }
};

export default combineReducers({
  count: countReducer,
});

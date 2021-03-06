// import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {counterSlice} from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

let reducers = combineReducers({
  counter: counterSlice.reducer
});

// const store = createStore(reducers);
const store = configureStore({
  reducer: reducers
});

export {
  store
}

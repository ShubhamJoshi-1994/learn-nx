import React from 'react';
import './counter.module.css';
import { useSelector, useDispatch } from "react-redux";
import {increaseCount, decreaseCount} from '@learn-nx/redux1'


export function Counter(props) {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.countReducer.count.count
  );



  const increase = () => {
    // increase count
    dispatch(increaseCount(count+1))
    // dispatch({type: 'INC_COUNT', count: count+1})
  };

  const decrease = () => {
    // decrease count
    dispatch(decreaseCount(count-1))
    // dispatch({type: 'DEC_COUNT', count: count-1})
  };

  return (
    <div>
      <h1>The count is : {count}</h1>

      <div>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </div>
    </div>
  );
}
export default Counter;

import React from 'react';
import './counter.module.css';
import { useSelector, useDispatch } from "react-redux";
import {increaseCount, decreaseCount} from '@learn-nx/redux1'
import {increment, decrement} from '@learn-nx/redux2'
import { FormattedMessage } from "gatsby-plugin-intl";


export function Counter(props) {
  const dispatch = useDispatch();
  console.log('increment', increment());

  // redux1
  // const count = useSelector(
  //   (state) => state.countReducer.count.count
  // );

  // redux2
  const count = useSelector(
    (state) => state.counter
  );



  const increase = () => {
    // increase count
    // dispatch(increaseCount(count+1))
    dispatch(increment())
    
  };

  const decrease = () => {
    // decrease count
    // dispatch(decreaseCount(count-1))
    dispatch(decrement())
  };

  return (
    <div>
      <h1>The count is : {count}</h1>

      <div>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </div>

      <h4>Counter component from lib: <FormattedMessage id={'text-a'} /> </h4>
    </div>
  );
}
export default Counter;

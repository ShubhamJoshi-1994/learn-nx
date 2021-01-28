import React from 'react';
import './ui-header.module.css';
import { useSelector } from "react-redux";

export function UiHeader(props) {
  // redux1
  // const count = useSelector(
  //   (state) => state.countReducer.count.count
  // );

  // redux2
  const count = useSelector(
    (state) => state.counter
  );


  return (
    <div>
      <h1>Welcome to ui-header! in shared3 lib</h1>
      <h4>Counter in UI Header component: {count}</h4>
    </div>
  );
}
export default UiHeader;

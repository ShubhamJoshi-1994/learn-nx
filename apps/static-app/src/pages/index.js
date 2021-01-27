import React from 'react';
import './index.css';
import {UiHeader} from '@learn-nx/shared3';
import {Counter} from '@learn-nx/shared3';

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <header className="flex">
        {/* <Logo width="75" height="75" />
        <h1>Welcome to static-app!</h1> */}
        <UiHeader />
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
};

export default Index;

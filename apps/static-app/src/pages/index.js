import React from 'react';
import './index.css';
import {UiHeader} from '@learn-nx/shared3';
import {Counter} from '@learn-nx/shared3';
import { FormattedMessage, navigate } from "gatsby-plugin-intl";

export const Index = () => {
  return (
    <div className="app">
      <header className="flex">
        <UiHeader />
      </header>
      <main>
        <Counter navigationCallback={(path) => navigate(path)}/>

        <h3>This is a page element: <FormattedMessage id={'text-a'} /> </h3>

        <button onClick={() => navigate('/home')}>trigger Navigate from Index page to home page</button>
      </main>
    </div>
  );
};

export default Index;

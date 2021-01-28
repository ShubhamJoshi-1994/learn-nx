import React from 'react';
import './index.css';
import { UiHeader } from '@learn-nx/shared3';
import { FormattedMessage, navigate } from 'gatsby-plugin-intl';

export const Index = () => {

  return (
    <div className="app">
      <header className="flex">
        <h2>Home Page</h2>
        <UiHeader />
      </header>
      <main>
        <h3>
          This is Home page: <FormattedMessage id={'text-b'} />
        </h3>

        <button onClick={() => navigate('/')}>trigger Navigate from Home page to index page</button>
      </main>
    </div>
  );
};

export default Index;

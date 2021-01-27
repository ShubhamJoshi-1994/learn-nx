import React from 'react';
import styles from './app.module.css';
import {UiHeader} from '@learn-nx/shared3';

export function App() {
  return (
    <div className={styles.app}>
      <UiHeader />
    </div>
  );
}
export default App;

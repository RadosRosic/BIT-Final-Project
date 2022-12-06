import React, { useEffect } from 'react';
import { ApplicationProvider } from './context';
import './App.scss';

const App = () => {

  return (
    <>
      <ApplicationProvider>
        <div>App</div>
      </ApplicationProvider>
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { ApplicationProvider } from './context.js';

const App = () => {
  const [token, setToken] = useState('');

  console.log(token);

  function getToken() {
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'dev@dev.com',
        password: 'developer',
      }),
    })
      .then((res) => res.json())
      .then((res) => setToken(res.accessToken));
  }

  useEffect(() => getToken(), []);

  return (
    <>
      <ApplicationProvider>
        <div>App</div>
      </ApplicationProvider>
    </>
  );
};

export default App;

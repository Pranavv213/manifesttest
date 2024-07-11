import React, { useState } from 'react';
import TelegramLogin from './TelegramLogin';

const App = () => {
  const [authData, setAuthData] = useState(null);

  const handleAuthDataReceived = (data) => {
    setAuthData(data);
  };

  return (
    <div>
      <TelegramLogin onAuthDataReceived={handleAuthDataReceived} />
      {authData && (
        <div>
          <p>Telegram User ID: {authData.id}</p>
          <p>Username: {authData.username}</p>
          <p>Auth Date: {new Date(authData.auth_date * 1000).toLocaleString()}</p>
          <p>Hash: {authData.hash}</p>
          {authData.photo_url && <img src={authData.photo_url} alt="User Profile" />}
        </div>
      )}
    </div>
  );
};

export default App;

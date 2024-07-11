import React, { useEffect, useState } from 'react';

const TelegramLogin = ({ onAuthDataReceived }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'Tet1234bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    document.getElementById('telegram-login-container').appendChild(script);

    window.onTelegramAuth = user => {
      onAuthDataReceived(user);
    };
  }, [onAuthDataReceived]);

  return (
    <div>
      <h1>Telegram Login</h1>
      <div id="telegram-login-container"></div>
    </div>
  );
};

export default TelegramLogin;

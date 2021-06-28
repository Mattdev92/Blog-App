import ReactDOM from 'react-dom';
import React from 'react';
import Root from 'root/root';
import { GlobalStyle } from 'assets/globalStyles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

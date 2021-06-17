import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from 'store/store';
import { ApolloProvider } from '@apollo/client';
import { client } from 'api/apolloClient';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

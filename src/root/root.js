import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import { ApolloProvider } from '@apollo/client';
import { client } from 'api/apolloClient';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from 'views/about';
import News from 'views/news';
import Cooperation from 'views/cooperation';
import Main from 'views/main';

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/Me">
              <About />
            </Route>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/Cooperation">
              <Cooperation />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default Root;

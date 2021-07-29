import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { Layout } from './UI/Layout';

function App(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:make/:model">
          <Details />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import React from 'react';
import Map from './Map';
import { Route, Switch, HashRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Map} />
        </Switch>
      </HashRouter>
    </div>
  );
}

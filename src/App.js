import React from 'react';
import './App.css';
import Map from './Map';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Map} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

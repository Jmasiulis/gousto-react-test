import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ProductsContainer } from './features/products';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route
          render={() => {
            return (
              <Switch>
                <Route exact path="/" component={ProductsContainer} />
                <Route exact path="/category/:categoryId" component={ProductsContainer} />
              </Switch>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

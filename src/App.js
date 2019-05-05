import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ProductsContainer } from './features/products';
import './assets/Categories.css';
import './assets/Products.css';
import './assets/Search.css';

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

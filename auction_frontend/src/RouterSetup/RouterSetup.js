import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import ProductListing from '../ProductListing/ProductListing';
import ProductDetails from '../ProductDetails/ProductDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

const RouterSetup = () => {
  return <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/products'>
          <ProductListing />
        </Route>
        <Route exact path='/product/:product_id' children={<ProductDetails />}></Route>
        <Route exact path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>;
};

export default RouterSetup;
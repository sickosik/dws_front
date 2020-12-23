import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store  from '../pages/store/index';
import MainStore from '../pages/store/Main';
import Side from '../pages/store/Side';
import Beverage from '../pages/store/Beverage';
import Add from '../pages/store/Add';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/main" component={MainStore} />
          <Route path="/side" component={Side} />
          <Route path="/beverage" component={Beverage} />
          <Route path="/add" component={Add} />
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;
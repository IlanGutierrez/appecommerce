import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Cart from "../pages/Cart";
import Home from "./view/Home";
import Clientes from "./view/Clientes"

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      {/* <Switch>
        <Route path="/cart" component={Cart} />
      </Switch> */}
      <Switch>
        <Route path='/Clientes' component={Clientes} />
      </Switch>
    </Router>
  );
};
export default Routes;

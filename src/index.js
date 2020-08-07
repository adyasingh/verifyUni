import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import Career from "views/Career/Career.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     
      <Route path="/career" component={Career} />
      <Route path="/" component={Components} />
    
    </Switch>
   
  </Router>,
  document.getElementById("root")
);

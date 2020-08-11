import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import Career from "views/Career/Career.js";
import Career2 from "views/Career/Career-c.js";
import Career3 from "views/Career/Career-p.js";

import College from "views/College/College-hs.js";
import College2 from "views/College/College-c.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     
      <Route path="/career" component={Career} />
      <Route path="/career-c" component={Career2} />
      <Route path="/career-p" component={Career3} />

      <Route path="/college-hs" component={College} />
      <Route path="/college-c" component={College2} />
      <Route path="/" component={Components} />
    
    </Switch>
   
  </Router>,
  document.getElementById("root")
);

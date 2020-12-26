import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "./user/register";
import Login from "./user/login";
import Profile from "./user/profile";
import Buildings from "./buildings/buildings.components";

function Routes() {
    return (
  
        <div className="container mt-3">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route exact path={["/", "/buildings"]} component={Buildings} />
            <Route //path="/buildings/:id" component={Building} 
            />
          </Switch>
        </div>
      
    );
  }
  
  export default Routes;
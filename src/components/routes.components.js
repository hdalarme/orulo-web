import React from "react";
import { Switch, Route } from "react-router-dom";

import Buildings from "./buildings/buildings.components";

function Routes() {
    return (
  
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/buildings"]} component={Buildings} />
            <Route //path="/buildings/:id" component={Building} 
            />
          </Switch>
        </div>
      
    );
  }
  
  export default Routes;
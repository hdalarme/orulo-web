import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import MenuTopo from "./components/menu.topo.components";
import Routes from "./components/routes.components";

function App() {
  
  return (
    <div>
      <MenuTopo />

      <Routes />
    </div>
  ); 
}

export default App;

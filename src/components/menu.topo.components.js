import React from "react";
import { Link } from "react-router-dom";

function MenuTopo() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Órulo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/buildings"} className="nav-link">
                Empreendimentos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        </nav>
    );
  }
  
  export default MenuTopo;
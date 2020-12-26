import React from "react";
import { Link } from "react-router-dom";

import UserDataService from "../services/user.service";

function MenuTopo() {

  //const currentUser = JSON.parse(localStorage.getItem("userData"));
  
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

          </div>
          { /*currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.data.email}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={UserDataService.logout()}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )*/}
        </nav>
    );
  }
  
  export default MenuTopo;
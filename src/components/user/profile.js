import React from "react";
import { Redirect } from 'react-router-dom';

const Profile = () => {

    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const currentUserH = JSON.parse(localStorage.getItem("userHeader"));

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.name}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong> {currentUserH.substring(0, 5)} ...{" "}
           {currentUserH.substr(currentUserH.length - 5)}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
        </div>
      );

}

export default Profile;
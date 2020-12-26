import React from "react";

const authHeader = () => {

    const currentUser = JSON.parse(localStorage.getItem("userData")).data;
    const currentUserH = JSON.parse(localStorage.getItem("userHeader"));

  if (userData && userHeader) {
    return { Authorization: 'Bearer ' + userHeader };
  } else {
    return {};
  }

}

export default authHeader;
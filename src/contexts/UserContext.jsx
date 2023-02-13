import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  isCustomer: false,
  isSeller: false,
});

export default UserContext;

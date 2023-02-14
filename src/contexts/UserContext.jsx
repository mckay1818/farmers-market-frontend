import React from "react";

const UserContext = React.createContext({
  token: null,
  isCustomer: false,
  isSeller: false,
});

export default UserContext;

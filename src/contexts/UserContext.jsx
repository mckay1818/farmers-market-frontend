import React, { useContext } from "react";

const UserContext = React.createContext({
  token: null,
  isCustomer: false,
  isSeller: false,
  // onLogout,
});

// TODO
// export const UserContextProvider = (props) => {
//   const []
// }

export default UserContext;

// export const useAuth = () => {
//   return useContext(UserContext);
// };

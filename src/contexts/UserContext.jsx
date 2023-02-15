import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  role: null,
  setCurrentUser: () => {},
  setRole: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const value = { currentUser, setCurrentUser, role, setRole };

  // persist context on refresh with useEffect
  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    const roleData = localStorage.getItem("role");
    if (tokenData && !currentUser) {
      setCurrentUser(tokenData);
    }
    if (roleData && !currentUser) {
      setRole(roleData);
    }
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

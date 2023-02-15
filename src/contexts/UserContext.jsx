import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  role: null,
  username: null,
  setCurrentUser: () => {},
  setRole: () => {},
  setUserame: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
    role,
    setRole,
    username,
    setUsername,
  };

  // persist context on refresh with useEffect
  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    const roleData = localStorage.getItem("role");
    const usernameData = localStorage.getItem("username");
    if (tokenData && !currentUser) {
      setCurrentUser(tokenData);
      // must parse the previously stringified role & username to grab values accurately
      setRole(JSON.parse(roleData));
      setUsername(JSON.parse(usernameData));
    }
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

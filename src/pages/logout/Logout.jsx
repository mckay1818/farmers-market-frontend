import axios from "axios";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Logout.css";

const Logout = () => {
  const [error, setError] = useState(null);
  const { setRole, setCurrentUser } = useContext(UserContext);

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/logout`)
    .then((response) => {
      console.log(response);
      // TODO - decide to save storage as cookies or local storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setCurrentUser(null);
      setRole(null);
    })
    .catch((e) => {
      setError(e.response.data.message);
      console.log(error);
    });

  return (
    <main>
      <h2 className="logout-header">You have been successfully logged out!</h2>
      <NavLink to="/login">
        <button className="login-button">sign back in</button>
      </NavLink>
    </main>
  );
};

export default Logout;

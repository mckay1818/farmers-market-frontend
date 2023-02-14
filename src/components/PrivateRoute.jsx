import UserContext from "../contexts/UserContext";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const token = UserContext.token;
  const [shouldRedirect, setShouldRedirect] = useState(!token);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) navigate("/");
  }, [shouldRedirect]);

  return children;
};

export default PrivateRoute;

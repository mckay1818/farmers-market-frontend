import UserContext from "../contexts/UserContext";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const token = UserContext.token;
  const [shouldRedirect, setShouldRedirect] = useState(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) navigate("/");
  }, [shouldRedirect]);

  return children;
};

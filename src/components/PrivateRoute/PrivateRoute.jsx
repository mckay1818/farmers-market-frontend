import UserContext from "../../contexts/UserContext";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../ui/Footer/Footer";

const PrivateRoute = ({ children }) => {
  const token = UserContext.token;
  const [shouldRedirect, setShouldRedirect] = useState(!token);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) navigate("/");
  }, [shouldRedirect]);

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrivateRoute;

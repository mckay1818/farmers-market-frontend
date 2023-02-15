import { UserContext } from "../../contexts/UserContext";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../ui/Footer/Footer";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);
  const [shouldRedirect, setShouldRedirect] = useState(!currentUser);
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

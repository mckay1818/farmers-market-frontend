import { useContext } from "react";
import { Outlet, redirect } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import UserContext from "../../../contexts/UserContext";

const Layout = () => {
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

export default Layout;

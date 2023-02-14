import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../../NavBar/NavBar";

const PublicRoute = () => {
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

export default PublicRoute;

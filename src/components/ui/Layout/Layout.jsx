import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import UserContext from "../../../contexts/UserContext";

const Layout = () => {
  return (
    <>
      <NavBar />
      {console.log(UserContext)}
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

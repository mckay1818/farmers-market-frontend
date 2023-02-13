import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

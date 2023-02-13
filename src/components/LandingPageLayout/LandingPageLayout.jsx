import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LandingHeader from "../LandingHeader/LandingHeader";
import "./LandingPageLayout.css";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default LandingPageLayout;

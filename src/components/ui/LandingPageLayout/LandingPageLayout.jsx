import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LandingHeader from "../LandingHeader/LandingHeader";
import "./LandingPageLayout.css";

const LandingPageLayout = () => {
  return (
    <>
      <LandingHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;

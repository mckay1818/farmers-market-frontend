import { useContext } from "react";
import { Outlet, redirect } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import UserContext from "../../../contexts/UserContext";

const Layout = () => {
  const ctxt = useContext(UserContext);

  if (ctxt.token) {
    return (
      <>
        <NavBar />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  } else {
    return redirect("/login");
  }

  // return ctxt.token ? (
  //   <p>whoops</p>
  // ) : (
  //   <>
  //     <NavBar />
  //     <main className="main-content">
  //       <Outlet />
  //     </main>
  //     <Footer />
  //   </>
  // );
};

export default Layout;

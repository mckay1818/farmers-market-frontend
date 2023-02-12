import { Container } from "react-bootstrap";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

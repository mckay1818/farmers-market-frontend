import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className="NavBar">
        <Container>
          <Navbar.Brand as={NavLink} to="/sellers">
            🍅 Farmer's Market
          </Navbar.Brand>
          <SearchBar />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/sellers">
                Home
              </Nav.Link>
              {/* TODO - FIGURE OUT LINKING TO PAGE */}
              <Nav.Link as={NavLink} to="/sellers/:sellerShopName">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;

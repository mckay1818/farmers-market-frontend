import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className="NavBar">
        <Container className="nav-bar-left">
          <Navbar.Brand as={NavLink} to="/sellers">
            🍅 Farmer's Market
          </Navbar.Brand>
          <SearchBar />
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Container className="nav-bar-right">
              <Nav.Link as={NavLink} to="/sellers">
                Home
              </Nav.Link>
              {/* TODO - FIGURE OUT LINKING TO PAGE */}
              <Nav.Link as={NavLink} to="/sellers/:sellerShopName">
                Profile
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;

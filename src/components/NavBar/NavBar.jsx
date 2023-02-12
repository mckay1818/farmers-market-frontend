import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className="NavBar">
        <Container className="navbar-left">
          <Navbar.Brand as={NavLink} to="/sellers">
            🍅 Farmer's Market
          </Navbar.Brand>
        </Container>
        <Container className="navbar-right" id="navbar-right">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar />
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

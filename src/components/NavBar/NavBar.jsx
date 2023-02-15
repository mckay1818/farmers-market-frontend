import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
  const { currentUser, role, username } = useContext(UserContext);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="nav-bar">
        <Container className="navbar-left">
          {currentUser ? (
            <Navbar.Brand as={NavLink} to="/sellers">
              🍅 Farmer's Market
            </Navbar.Brand>
          ) : (
            <Navbar.Brand as={NavLink} to="/">
              🍅 Farmer's Market
            </Navbar.Brand>
          )}
        </Container>
        {currentUser ? (
          <Container className="navbar-right" id="navbar-right">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBar />
              <Nav className="navbar-right me-auto">
                <Nav.Link as={NavLink} end to="/sellers">
                  Home
                </Nav.Link>
                {/* TODO - FIGURE OUT LINKING TO PAGE */}
                {role === "seller" ? (
                  <Nav.Link as={NavLink} to={`/sellers/${username}`}>
                    Profile
                  </Nav.Link>
                ) : (
                  <Nav.Link as={NavLink} to={`/customers/${username}`}>
                    Profile
                  </Nav.Link>
                )}
                <Nav.Link as={NavLink} to="/logout">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        ) : (
          <Container className="navbar-right" id="navbar-right">
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Container>
        )}
      </Navbar>
    </>
  );
}

export default NavBar;

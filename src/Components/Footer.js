import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Navbar sticky="bottom" bg="dark" variant="dark" style={{textTransform: "capitalize"}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link className="nav-link text-light" to="/home">
                Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link text-light" to="/about">
                about
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link text-light" to="/users">
                users
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;

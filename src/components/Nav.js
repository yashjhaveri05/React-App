import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"><h3>MyReactApp</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/"><Link to="/" className="text-white">About</Link></Nav.Link>
          <Nav.Link href="/Weather"><Link to="/Weather" className="text-white">Weather</Link></Nav.Link>
          <Nav.Link href="/Recipes"><Link to="/Recipes" className="text-white">Recipes</Link></Nav.Link>
          <Nav.Link href="/Corona"><Link to="/Corona" className="text-white">CoronaTracker</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
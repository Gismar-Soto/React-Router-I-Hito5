import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHome, FaUser, FaSignInAlt, FaUserCircle } from 'react-icons/fa'; // Añadido FaUserCircle para Profile

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
          <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link> {/* Enlace para Login */}
          <Nav.Link as={Link} to="/register"><FaUser /> Register</Nav.Link> {/* Enlace para Register */}
          <Nav.Link as={Link} to="/profile"><FaUserCircle /> Profile</Nav.Link> {/* Enlace para Profile */}
        </Nav>
        <Button variant="outline-info" as={Link} to="/cart">
          <FaShoppingCart /> Total : $25.000
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
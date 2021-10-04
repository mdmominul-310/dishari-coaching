import { Container, Nav, Navbar, } from "react-bootstrap";
import logo from '../../images/logo.PNG'
import './Header.css'
import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
  <   Navbar.Brand href="#home"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <NavLink to="/home" className="me-auto d-flex align-items-center nav-btn">
        <img src={logo} alt="" /> <h2>Dishari</h2>
      </NavLink>
    <Nav>
    <NavLink  className="nav-btn" to="/home">Home</NavLink>
     <NavLink className="nav-btn" to="/services"> Services</NavLink>
     <NavLink className="nav-btn" to ="about">About</NavLink>
         </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;
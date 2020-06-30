import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, NavItem } from "react-bootstrap";

import logo from "../img/ddlogo-grey.png";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    // src="/ddlogo.png" // black background
                    src={logo} // grey background
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Doble Doble Digital
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/demo">Schedule a Demo</Nav.Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="About Us" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#About-Us">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#Contact-Us">Contact Us</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                {/* <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Button href="/login" className="d-none d-lg-block ml-2" variant="dark">Sign Up</Button>
                    <Nav.Link href="/login" className="d-lg-none" id="sign-up-button">Sign Up</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
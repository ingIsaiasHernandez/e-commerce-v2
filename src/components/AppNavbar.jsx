import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import PurchasesSidebar from "./PurchasesSidebar";

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="primary" expand="md" variant="dark" size="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Appnavbar-nav" />
          <Navbar.Collapse id="basic-Appnavbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases">
                Purchases
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases" onClick={handleShow}>
                Purchases (aside)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <PurchasesSidebar show={show} handleClose={handleClose}></PurchasesSidebar>

     
    </div>
  );
};

export default AppNavbar;

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useCart } from "react-use-cart";
const NavBar = (props) => {
  const { totalItems } = useCart();
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
      fixed="top"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10%",
          }}
        >
          <Nav.Link href="#action1">HOME</Nav.Link>
          <Nav.Link href="#action2">STORE</Nav.Link>
          <Nav.Link href="#action2">ABOUT</Nav.Link>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          style={{ width: "10%" }}
        >
          <Button variant="info" onClick={props.onShow}>
            Cart <span>{totalItems}</span>
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

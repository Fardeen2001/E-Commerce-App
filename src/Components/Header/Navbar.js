import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/Home"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/Store"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            STORE
          </NavLink>
          <NavLink
            to="/About"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            ABOUT
          </NavLink>
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

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
          <Link
            class="text-decoration-none text-light font-weight-bold"
            href="#action1"
          >
            HOME
          </Link>
          <Link
            class="text-decoration-none font-weight-bold text-light"
            to="/Store"
          >
            STORE
          </Link>
          <Link
            class="text-decoration-none font-weight-bold text-light bold"
            to="/About"
          >
            ABOUT
          </Link>
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

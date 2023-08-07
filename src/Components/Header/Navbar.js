import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavBar.module.css";
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
        <Container>
          <nav className={classes.header}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={(navdata) =>
                    navdata.isActive ? classes.active : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Store"
                  className={(navdata) =>
                    navdata.isActive ? classes.active : ""
                  }
                >
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={(navdata) =>
                    navdata.isActive ? classes.active : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={(navdata) =>
                    navdata.isActive ? classes.active : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AuthForm"
                  className={(navdata) =>
                    navdata.isActive ? classes.active : ""
                  }
                >
                  LogIn
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          style={{ width: "10%" }}
        >
          <Button variant="info" onClick={props.onShow}>
            Cart <span>{totalItems}</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

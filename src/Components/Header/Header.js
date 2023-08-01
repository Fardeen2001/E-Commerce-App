import React from "react";
import classes from "./Header.module.css";
import NavBar from "./Navbar";
const Header = (props) => {
  return (
    <>
      <NavBar onShow={props.onShow} />
      <div className={classes.title}>
        <h1>The Generics</h1>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav />
  </header>
);

export default toolbar;

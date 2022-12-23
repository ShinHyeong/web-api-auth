import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to='/'><div className={classes.logo}>Hello World!</div></Link>
    </header>
  );
}

export default MainNavigation;
import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNaviagtion';

function layout(props) {
  return <div>
    <MainNavigation></MainNavigation>
    <main className={classes.main}>{props.children}</main>
  </div>;
}

export default layout;

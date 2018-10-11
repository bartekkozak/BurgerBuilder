import React from "react";
import classes from "./NavigationItem.css";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

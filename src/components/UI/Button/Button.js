import React from "react";
import classes from "./Button.css";

export default props => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);
import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export default props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>{" "}
      </p>
      {controls.map((el, i) => {
        return (
          <BuildControl
            add={() => props.ingredientAdd(el.type)}
            remove={() => props.ingredientRemove(el.type)}
            key={i}
            label={el.label}
            disabled={props.disabled[el.type]}
          />
        );
      })}
      <button
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={!props.purchaseable}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

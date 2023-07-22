import React from "react";
import classes from "./Toggle.module.css";
const Toggle = ({ onClick, toggle }) => {
  const onClickHandler = () => {
    onClick();
  };

  return (
    <div className={classes.mainContainer} onClick={onClickHandler}>
      <div
        className={`${classes.monthly} ${toggle ? `${classes.active}` : ""}`}
      >
        Monthly
      </div>
      <div
        className={`${classes.container} ${toggle ? "" : `${classes.toggle}`}`}
      >
        <div className={classes.circle}></div>
      </div>
      <div className={`${classes.yearly} ${toggle ? "" : `${classes.active}`}`}>
        Yearly
      </div>
    </div>
  );
};

export default Toggle;

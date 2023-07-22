import React from "react";
import classes from "./CustomButton.module.css";
const CustomButton = ({ confirm, onClick, children, other = false }) => {
  return (
    <button
      className={`${classes.btn} ${other ? `${classes.other}` : ""} ${
        confirm ? `${classes.confirm}` : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;

import React from "react";
import classes from "./CheckBox.module.css";

import check from "../../../images/icon-checkmark.svg";
const CheckBox = ({ active }) => {
  return (
    <div
      className={`${classes.container} ${active ? `${classes.active}` : ""}`}
    >
      {active && <img src={check} alt="check" />}
    </div>
  );
};

export default CheckBox;

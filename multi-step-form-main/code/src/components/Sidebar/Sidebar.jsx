import React from "react";
import { useSelector } from "react-redux";

import classes from "./Sidebar.module.css";
const Sidebar = () => {
  const page = useSelector((state) => state.page.page);

  return (
    <div className={classes.container}>
      <div className={classes.step}>
        <div
          className={`${classes.stepNum} ${
            page === 1 ? `${classes.active}` : ""
          }`}
        >
          1
        </div>
        <div className={classes.dataWrapper}>
          <div>STEP 1</div>
          <div>Your info</div>
        </div>
      </div>
      <div className={classes.step}>
        <div
          className={`${classes.stepNum} ${
            page === 2 ? `${classes.active}` : ""
          }`}
        >
          2
        </div>
        <div className={classes.dataWrapper}>
          <div>STEP 2</div>
          <div>select plan</div>
        </div>
      </div>
      <div className={classes.step}>
        <div
          className={`${classes.stepNum} ${
            page === 3 ? `${classes.active}` : ""
          }`}
        >
          3
        </div>
        <div className={classes.dataWrapper}>
          <div>STEP 3</div>
          <div>add-ons</div>
        </div>
      </div>
      <div className={classes.step}>
        <div
          className={`${classes.stepNum} ${
            page === 4 || page === 5 ? `${classes.active}` : ""
          }`}
        >
          4
        </div>
        <div className={classes.dataWrapper}>
          <div>STEP 4</div>
          <div>summary</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

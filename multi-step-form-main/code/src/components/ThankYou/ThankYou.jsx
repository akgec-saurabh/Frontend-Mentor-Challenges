import React from "react";
import classes from "./ThankYou.module.css";

import thanks from "../../images/icon-thank-you.svg";
function ThankYou() {
  return (
    <div className={classes.container}>
      <img src={thanks} alt="icon" />
      <h1>Thank you!</h1>
      <div className={classes.desc}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
}

export default ThankYou;

import React from "react";
import classes from "./Success.module.css";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import success from "../../assets/images/icon-success.svg";
const basicVariants = {
  hide: {
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};
function Success({ email, onDismiss }) {
  return (
    <motion.div
      className={classes.container}
      variants={basicVariants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div>
        <img src={success} alt="checkmark" />
        <h1>Thanks for subscribing!</h1>
        <div className={classes.message}>
          A confirmation email has been sent to&nbsp;
          <span className={classes.email}>{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </div>
      </div>
      <Button
        size="max"
        onClick={() => {
          onDismiss();
        }}
      >
        Dismiss message
      </Button>
    </motion.div>
  );
}

export default Success;

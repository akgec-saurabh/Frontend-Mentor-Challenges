import React from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";

function Button({ children, size = "m", ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`${classes.container} ${classes[size]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;

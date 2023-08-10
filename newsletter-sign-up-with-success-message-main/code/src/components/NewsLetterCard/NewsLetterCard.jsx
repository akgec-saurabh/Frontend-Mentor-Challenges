import React, { useState } from "react";
import classes from "./NewsLetterCard.module.css";
import desktopIllustration from "../../assets/images/illustration-sign-up-desktop.svg";
import mobileIllustration from "../../assets/images/illustration-sign-up-mobile.svg";
import Button from "../Button/Button";
import { easeIn, motion } from "framer-motion";

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
      delayChildren: 1,
      staggerChildren: 1,
      ease: easeIn,
    },
  },
};

const draw = {
  hide: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};
const item = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      ease: easeIn,
    },
  },
};

function NewsLetterCard({ onSubscribe }) {
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState(null);
  const isMobile = window.matchMedia("(max-width:750px)").matches;

  // ON SUBMIT HANDLER
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!error && inputEmail !== "") onSubscribe(inputEmail);
    else setError("Required");
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInputEmail(e.target.value);
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e.target.value)
    ) {
      setError("Valid email required");
    } else {
      setError(null);
    }
  };
  return (
    <motion.div
      variants={basicVariants}
      initial="hide"
      animate="show"
      exit="hide"
      className={classes.container}
    >
      <div className={classes.left}>
        <h1>Stay updated!</h1>
        <div>Join 60,000+ product managers receiving monthly updates on:</div>
        <ul>
          <motion.li variants={item}>
            <div className={classes.svg}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <motion.circle
                    variants={draw}
                    cx="10.5"
                    cy="10.5"
                    r="10.5"
                    fill="#FF6155"
                  />
                  <motion.path
                    variants={draw}
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </motion.svg>
            </div>
            Product discovery and building what matters
          </motion.li>
          <motion.li variants={item}>
            <div className={classes.svg}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <motion.circle
                    variants={draw}
                    cx="10.5"
                    cy="10.5"
                    r="10.5"
                    fill="#FF6155"
                  />
                  <motion.path
                    variants={draw}
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </motion.svg>
            </div>
            Measuring to ensure updates are a success
          </motion.li>
          <motion.li variants={item}>
            <div className={classes.svg}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <motion.circle
                    variants={draw}
                    cx="10.5"
                    cy="10.5"
                    r="10.5"
                    fill="#FF6155"
                  />
                  <motion.path
                    variants={draw}
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </motion.svg>
            </div>
            And much more!
          </motion.li>
        </ul>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.label}>
            <label htmlFor="email">Email address</label>
            <div className={classes.error}>{error}</div>
          </div>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className={error ? `${classes.invalid}` : ""}
            onChange={onChangeHandler}
            value={inputEmail}
            type="text"
            placeholder="email@company.com"
          />

          <Button size="max" type="submit">
            Subscribe to monthly newsletter
          </Button>
        </form>
      </div>
      <div className={classes.right}>
        {!isMobile && <img src={desktopIllustration} alt="newsletter" />}
        {isMobile && <img src={mobileIllustration} alt="newsletter" />}
      </div>
    </motion.div>
  );
}

export default NewsLetterCard;

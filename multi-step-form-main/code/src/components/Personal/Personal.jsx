import React from "react";
import classes from "./Personal.module.css";
import CustomButton from "../UI/Button/CustomButton";
import { pageActions } from "../../store/page-slice";
import { useDispatch, useSelector } from "react-redux";
import { personalActions } from "../../store/personal-slice";
const Personal = () => {
  const { name, email, phone, nameValid, emailValid, phoneValid } = useSelector(
    (state) => state.personal
  );

  // console.log(name, email, phone);

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (nameValid.validity && phoneValid.validity && emailValid.validity) {
      dispatch(pageActions.goToPlan());
    } else {
      dispatch(personalActions.setError());
    }
  };
  const onChangeHandler = (e) => {
    if (e.target.id === "name") {
      dispatch(personalActions.updateName(e.target.value));
    } else if (e.target.id === "number") {
      if (e.target.value.length === 11) {
        return;
      }
      dispatch(personalActions.updatePhone(e.target.value));
    } else if (e.target.id === "email") {
      dispatch(personalActions.updateEmail(e.target.value));
    }
  };
  return (
    <div className={classes.container}>
      <div className="mainHeader">
        <h1>Personal Info</h1>
        <div className="desc">
          Please provide your name, email address, and phone number.
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.inputWrapper}>
          <div className={classes.label}>
            <label htmlFor="name">Name</label>
            <div
              className={`${classes.error} ${
                nameValid.validity ? `${classes.hidden}` : ""
              }`}
            >
              {nameValid.error}
            </div>
          </div>
          <input
            onChange={onChangeHandler}
            placeholder="e.g. Stephen King"
            value={name}
            id="name"
            type="text"
          />
        </div>

        <div className={classes.inputWrapper}>
          <div className={classes.label}>
            <label htmlFor="email">Email Address</label>
            <div
              className={`${classes.error} ${
                emailValid.validity ? `${classes.hidden}` : ""
              }`}
            >
              {emailValid.error}
            </div>
          </div>
          <input
            onChange={onChangeHandler}
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            id="email"
            type="text"
          />
        </div>
        <div className={classes.inputWrapper}>
          <div className={classes.label}>
            <label htmlFor="number">Phone Number</label>
            <div
              className={`${classes.error} ${
                phoneValid.validity ? `${classes.hidden}` : ""
              }`}
            >
              {phoneValid.error}
            </div>
          </div>
          <input
            onChange={onChangeHandler}
            placeholder="e.g. +1 234 567 890"
            value={phone}
            id="number"
            type="text"
          />
        </div>
        <div className={classes.btnWrapper}>
          <CustomButton>Next Step</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Personal;

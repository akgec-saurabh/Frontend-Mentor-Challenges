import React from "react";
import classes from "./ButtonNav.module.css";
import CustomButton from "../UI/Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/page-slice";
const ButtonNav = () => {
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();

  const onNextHandler = () => {
    //! add another dispatch to validate form first then go to Plan

    dispatch(pageActions.goToPlan());
  };
  return (
    <div className={classes.container}>
      {page === 1 && <CustomButton>Go Back</CustomButton>}
      <CustomButton onClick={onNextHandler}>Next Step</CustomButton>
    </div>
  );
};

export default ButtonNav;

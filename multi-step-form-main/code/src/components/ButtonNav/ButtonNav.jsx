import React from "react";
import classes from "./ButtonNav.module.css";
import CustomButton from "../UI/Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/page-slice";
import { personalActions } from "../../store/personal-slice";
const ButtonNav = () => {
  const page = useSelector((state) => state.page.page);
  const { nameValid, emailValid, phoneValid } = useSelector(
    (state) => state.personal
  );
  const dispatch = useDispatch();

  const onGoBackHandler = () => {
    if (page === 2) {
      dispatch(pageActions.goToInfo());
    } else if (page === 3) {
      dispatch(pageActions.goToPlan());
    } else if (page === 4) {
      dispatch(pageActions.goToAddons());
    }
  };
  const onNextHandler = () => {
    if (page === 1) {
      if (nameValid.validity && phoneValid.validity && emailValid.validity) {
        dispatch(pageActions.goToPlan());
      } else {
        dispatch(personalActions.setError());
      }
    }

    if (page === 2) {
      dispatch(pageActions.goToAddons());
    }
    if (page === 3) {
      dispatch(pageActions.goToSummary());
    }
    if (page === 4) {
      dispatch(pageActions.goToThankYou());
    }
  };
  return (
    <div className={classes.container}>
      <CustomButton disabled={page === 1} onClick={onGoBackHandler} other>
        Go Back
      </CustomButton>
      <CustomButton confirm={page === 4} onClick={onNextHandler}>
        {page === 4 ? "Confirm" : "Next Step"}
      </CustomButton>
    </div>
  );
};

export default ButtonNav;

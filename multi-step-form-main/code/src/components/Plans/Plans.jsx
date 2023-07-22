import React from "react";
import classes from "./Plans.module.css";
import CustomButton from "../UI/Button/CustomButton";
import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/page-slice";
import Toggle from "../UI/Toggle/Toggle";
import { billingTypeAction } from "../../store/billingType-slice";
import { planActions } from "../../store/plan-slice";

const Plans = () => {
  const billingMonthly = useSelector(
    (state) => state.billingType.billingMonthly
  );

  const plans = useSelector((state) => state.plan);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(billingTypeAction.changeBilling());
  };

  const onClickArcadeHandler = (e) => {
    dispatch(planActions.arcadeActive());
  };
  const onClickAdvancedHandler = (e) => {
    dispatch(planActions.advancedActive());
  };
  const onClickProHandler = (e) => {
    dispatch(planActions.proActive());
  };

  const onNextHandler = () => {
    dispatch(pageActions.goToAddons());
  };

  const onGoBackHandler = () => {
    dispatch(pageActions.goToInfo());
  };
  return (
    <div className={classes.container}>
      <div className="mainHeader">
        <h1> Select your plan</h1>
        <div className="desc">
          You have the option of monthly or yearly billing.
        </div>
      </div>
      <div className={classes.planWrapper}>
        <div
          onClick={onClickArcadeHandler}
          className={`${classes.plan} ${plans.arcade.active && classes.active}`}
        >
          <img className={classes.icon} src={arcade} alt="icon" />
          <div className={classes.dataWrapper}>
            <div className={classes.title}> Arcade</div>
            <div className={classes.price}>
              $
              {billingMonthly
                ? plans.arcade.monthlyValue
                : plans.arcade.yearlyValue}
              {billingMonthly ? "/mo" : "/yr"}
            </div>
          </div>
          {!billingMonthly && <div className={classes.free}>2 months free</div>}
        </div>
        <div
          onClick={onClickAdvancedHandler}
          className={`${classes.plan} ${
            plans.advanced.active && classes.active
          }`}
        >
          <img className={classes.icon} src={advanced} alt="icon" />
          <div className={classes.dataWrapper}>
            <div className={classes.title}> Advanced</div>
            <div className={classes.price}>
              $
              {billingMonthly
                ? plans.advanced.monthlyValue
                : plans.advanced.yearlyValue}
              {billingMonthly ? "/mo" : "/yr"}
            </div>
            {!billingMonthly && (
              <div className={classes.free}>2 months free</div>
            )}
          </div>
        </div>
        <div
          onClick={onClickProHandler}
          className={`${classes.plan} ${plans.pro.active && classes.active}`}
        >
          <img className={classes.icon} src={pro} alt="icon" />
          <div className={classes.dataWrapper}>
            <div className={classes.title}> Pro</div>
            <div className={classes.price}>
              ${billingMonthly ? plans.pro.monthlyValue : plans.pro.yearlyValue}
              {billingMonthly ? "/mo" : "/yr"}
            </div>
            {!billingMonthly && (
              <div className={classes.free}>2 months free</div>
            )}
          </div>
        </div>
      </div>

      <Toggle toggle={billingMonthly} onClick={onChangeHandler} />
      <div className={classes.btnWrapper}>
        <CustomButton onClick={onGoBackHandler} other>
          Go Back
        </CustomButton>
        <CustomButton onClick={onNextHandler}>Next Step</CustomButton>
      </div>
    </div>
  );
};

export default Plans;

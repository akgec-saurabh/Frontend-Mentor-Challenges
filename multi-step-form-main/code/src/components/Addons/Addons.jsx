import React from "react";
import classes from "./Addons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addonActions } from "../../store/addon-slice";
import CheckBox from "../UI/CheckBox/CheckBox";
const Addons = () => {
  const billingMonthly = useSelector(
    (state) => state.billingType.billingMonthly
  );
  const addons = useSelector((state) => state.addon);

  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <div className="mainHeader">
        <h1> Select your plan</h1>
        <div className="desc">
          You have the option of monthly or yearly billing.
        </div>
      </div>
      <div className={classes.addOnWrapper}>
        <div
          onClick={() => {
            dispatch(addonActions.onlineServiceActive());
          }}
          className={`${classes.addon} ${
            addons.onlineService.active ? `${classes.active}` : ""
          }`}
        >
          <CheckBox active={addons.onlineService.active} />
          <div className={classes.addonData}>
            <div className={classes.head}>Online service</div>
            <div className={classes.text}> Access to multiplayer games</div>
          </div>
          <div className={classes.price}>
            +$
            {billingMonthly
              ? addons.onlineService.monthlyValue
              : addons.onlineService.yearlyValue}
            {billingMonthly ? "/mo" : "/yr"}
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(addonActions.largeStorageActive());
          }}
          className={`${classes.addon} ${
            addons.largeStorage.active ? `${classes.active}` : ""
          }`}
        >
          <CheckBox active={addons.largeStorage.active} />

          <div className={classes.addonData}>
            <div className={classes.head}> Larger storage</div>
            <div className={classes.text}> Extra 1TB of cloud save</div>
          </div>
          <div className={classes.price}>
            +$
            {billingMonthly
              ? addons.largeStorage.monthlyValue
              : addons.largeStorage.yearlyValue}
            {billingMonthly ? "/mo" : "/yr"}
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(addonActions.customProfileActive());
          }}
          className={`${classes.addon} ${
            addons.customProfile.active ? `${classes.active}` : ""
          }`}
        >
          <CheckBox active={addons.customProfile.active} />

          <div className={classes.addonData}>
            <div className={classes.head}>Customizable Profile</div>
            <div className={classes.text}> Custom theme on your profile</div>
          </div>
          <div className={classes.price}>
            +$
            {billingMonthly
              ? addons.customProfile.monthlyValue
              : addons.customProfile.yearlyValue}
            {billingMonthly ? "/mo" : "/yr"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addons;

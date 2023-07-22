import React, { useEffect } from "react";
import classes from "./Summary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../store/page-slice";
import CustomButton from "../UI/Button/CustomButton";
import { billingTypeAction } from "../../store/billingType-slice";

const Summary = () => {
  const { arcade, advanced, pro } = useSelector((state) => state.plan);
  const addons = useSelector((state) => state.addon);

  const billingMonthly = useSelector(
    (state) => state.billingType.billingMonthly
  );
  const dispatch = useDispatch();

  const onGoBackHandler = () => {
    dispatch(pageActions.goToAddons());
  };
  const onConfirmHandler = () => {
    dispatch(pageActions.goToThankYou());
  };

  const getTotal = () => {
    let total = 0;

    if (arcade.active) {
      total = billingMonthly ? arcade.monthlyValue : arcade.yearlyValue;
    } else if (advanced.active) {
      total = billingMonthly ? advanced.monthlyValue : advanced.yearlyValue;
    } else if (pro.active) {
      total = billingMonthly ? pro.monthlyValue : pro.yearlyValue;
    }

    for (const addon in addons) {
      if (addons[addon].active) {
        total += billingMonthly
          ? addons[addon].monthlyValue
          : addons[addon].yearlyValue;
      }
    }
    return total;
  };

  useEffect(() => {
    getTotal();
  }, [addons, billingMonthly]);

  return (
    <div className={classes.container}>
      <div className="mainHeader">
        <h1>Finishing up</h1>
        <div className="desc">
          Double-check everything looks OK before confirming.
        </div>
      </div>

      <div className={classes.summary}>
        <div className={classes.plans}>
          <div className={classes.billing}>
            <div>
              {arcade.active ? "Arcade" : advanced.active ? "Advanced" : "Pro"}(
              {billingMonthly ? "Monthly" : "Yearly"})
            </div>
            <div
              onClick={() => {
                dispatch(billingTypeAction.changeBilling());
              }}
              className={classes.change}
            >
              Change
            </div>
          </div>
          <div className={classes.price}>
            $
            {billingMonthly &&
              (arcade.active
                ? arcade.monthlyValue
                : advanced.active
                ? advanced.monthlyValue
                : pro.monthlyValue)}
            {!billingMonthly &&
              (arcade.active
                ? arcade.yearlyValue
                : advanced.active
                ? advanced.yearlyValue
                : pro.yearlyValue)}
            {billingMonthly ? "/mo" : "/yr"}
          </div>
        </div>
        <div className={classes.addons}>
          {addons.onlineService.active && (
            <div className={classes.addonWrapper}>
              <div className={classes.addon}>Online Service</div>
              <div>
                +$
                {billingMonthly
                  ? addons.onlineService.monthlyValue
                  : addons.onlineService.yearlyValue}
                {billingMonthly ? "/mo" : "/yr"}
              </div>
            </div>
          )}
          {addons.largeStorage.active && (
            <div className={classes.addonWrapper}>
              <div className={classes.addon}>Large Storage</div>
              <div>
                +$
                {billingMonthly
                  ? addons.largeStorage.monthlyValue
                  : addons.largeStorage.yearlyValue}
                {billingMonthly ? "/mo" : "/yr"}
              </div>
            </div>
          )}
          {addons.customProfile.active && (
            <div className={classes.addonWrapper}>
              <div className={classes.addon}>Customizable Profile</div>
              <div>
                +$
                {billingMonthly
                  ? addons.customProfile.monthlyValue
                  : addons.customProfile.yearlyValue}
                {billingMonthly ? "/mo" : "/yr"}
              </div>
            </div>
          )}
        </div>
        <div className={classes.total}>
          <div> Total(per {billingMonthly ? "month" : "year"})</div>
          <div className={classes.totalPrice}>
            +${getTotal()}
            {billingMonthly ? "/mo" : "/yr"}
          </div>
        </div>
      </div>
      <div className={classes.btnWrapper}>
        <CustomButton onClick={onGoBackHandler} other>
          Go Back
        </CustomButton>
        <CustomButton confirm onClick={onConfirmHandler}>
          Confirm
        </CustomButton>
      </div>
    </div>
  );
};

export default Summary;

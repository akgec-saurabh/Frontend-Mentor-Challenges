import { createSlice } from "@reduxjs/toolkit";

const initialBillingState = {
  billingMonthly: true,
};

const billingType = createSlice({
  name: "billing",
  initialState: initialBillingState,
  reducers: {
    changeBilling(state) {
      state.billingMonthly = !state.billingMonthly;
    },
  },
});

export const billingTypeAction = billingType.actions;

export default billingType;

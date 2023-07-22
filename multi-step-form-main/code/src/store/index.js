import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page-slice";
import personalSlice from "./personal-slice";
import billingType from "./billingType-slice";
import planSlice from "./plan-slice";
import addonSlice from "./addon-slice";

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    personal: personalSlice.reducer,
    plan: planSlice.reducer,
    addon: addonSlice.reducer,
    billingType: billingType.reducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initalPlanState = {
  arcade: { monthlyValue: 9, yearlyValue: 90, active: true },
  advanced: { monthlyValue: 12, yearlyValue: 120, active: false },
  pro: { monthlyValue: 15, yearlyValue: 150, active: false },
};

const planSlice = createSlice({
  name: "plan",
  initialState: initalPlanState,
  reducers: {
    arcadeActive(state) {
      state.arcade.active = !state.arcade.active;
      state.advanced.active = false;
      state.pro.active = false;
    },
    advancedActive(state) {
      state.arcade.active = false;
      state.advanced.active = !state.advanced.active;
      state.pro.active = false;
    },
    proActive(state) {
      state.arcade.active = false;
      state.advanced.active = false;
      state.pro.active = !state.pro.active;
    },
  },
});

export const planActions = planSlice.actions;

export default planSlice;

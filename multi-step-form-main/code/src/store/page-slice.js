import { createSlice } from "@reduxjs/toolkit";

const initalPageState = {
  page: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState: initalPageState,
  reducers: {
    goToInfo(state) {
      state.page = 1;
    },

    goToPlan(state) {
      state.page = 2;
    },
    goToAddons(state) {
      state.page = 3;
    },
    goToSummary(state) {
      state.page = 4;
    },
    goToThankYou(state) {
      state.page = 5;
    },
  },
});

export const pageActions = pageSlice.actions;
export default pageSlice;

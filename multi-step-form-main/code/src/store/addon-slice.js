import { createSlice } from "@reduxjs/toolkit";

const initalAddonState = {
  onlineService: { monthlyValue: 1, yearlyValue: 10, active: false },
  largeStorage: { monthlyValue: 2, yearlyValue: 20, active: false },
  customProfile: { monthlyValue: 2, yearlyValue: 20, active: false },
};

const addonSlice = createSlice({
  name: "addon",
  initialState: initalAddonState,
  reducers: {
    onlineServiceActive(state) {
      state.onlineService.active = !state.onlineService.active;
      //   state.largeStorage.active = false;
      //   state.customProfile.active = false;
    },

    largeStorageActive(state) {
      //   state.onlineService.active = false;
      state.largeStorage.active = !state.largeStorage.active;
      //   state.customProfile.active = false;
    },

    customProfileActive(state) {
      //   state.onlineService.active = false;
      //   state.largeStorage.active = false;
      state.customProfile.active = !state.customProfile.active;
    },
  },
});

export const addonActions = addonSlice.actions;

export default addonSlice;

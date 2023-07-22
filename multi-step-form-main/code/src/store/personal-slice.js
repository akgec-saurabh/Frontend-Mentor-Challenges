import { createSlice } from "@reduxjs/toolkit";

const personalInitialState = {
  name: "",
  email: "",
  phone: "",
  nameValid: { validity: false, error: "" },
  emailValid: { validity: false, error: "" },
  phoneValid: { validity: false, error: "" },
};

const personalSlice = createSlice({
  name: "personal",
  initialState: personalInitialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
      state.nameValid.validity = action.payload.trim() !== "";

      if (action.payload.trim() === "") {
        state.nameValid.error = "This field is required";
      }
    },
    updateEmail(state, action) {
      state.email = action.payload;

      state.emailValid.validity =
        action.payload.trim() !== "" && action.payload.trim().includes("@");
      if (action.payload.trim() === "") {
        state.emailValid.error = "This field is required";
      } else if (!action.payload.trim().includes("@")) {
        state.emailValid.error = "Input Valid Email";
      }
    },
    updatePhone(state, action) {
      state.phone = action.payload;
      state.phoneValid.validity =
        action.payload.trim() !== "" && action.payload.trim().length === 10;
      if (action.payload.trim() === "") {
        state.phoneValid.error = "This field is required";
      } else if (isNaN(action.payload.trim())) {
        state.phoneValid.error = "Please Input Number";
      } else if (action.payload.trim().length !== 10) {
        state.phoneValid.error = "Phone Number length should be 10";
      }
    },

    setError(state) {
      state.nameValid.error = "This field is required";
      state.emailValid.error = "This field is required";
      state.phoneValid.error = "This field is required";
    },
  },
});

export const personalActions = personalSlice.actions;

export default personalSlice;

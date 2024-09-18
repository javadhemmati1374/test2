import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    mobileNumber: "",
  },
  reducers: {
    updateForm: (state, action) => ({ ...state, ...action.payload }),
    resetForm: () => ({
      firstName: "",
      lastName: "",
      mobileNumber: "",
    }),
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  currentCompany: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentCompany: (state, action) => {
      state.currentCompany = action.payload;
    },
  },
});

export const { setUser, setCurrentCompany } = authSlice.actions;
export default authSlice.reducer;

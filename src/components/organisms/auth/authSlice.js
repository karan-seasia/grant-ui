import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "userdata",
  initialState: { user: false },
  reducers: {
    setUserData(state, data) {
      return { ...state, user: data.payload };
    },
  },
});

export const { setUserData } = authSlice.actions;

export const selectUserData = (state) => state.userdata.user;

export default authSlice.reducer;

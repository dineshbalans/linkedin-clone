import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn : false
  },
  reducers: {
    login(state,action) {
      console.log(action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

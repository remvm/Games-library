import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName } = action.payload;
      state.user = { uid, email, displayName };
      state.isAuth = true
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuth = false
    }
  },
});

export const { setUser, removeUser, setLoading } = userSlice.actions;
export default userSlice.reducer;

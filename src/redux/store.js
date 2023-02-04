import { configureStore, createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart(state, action) {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure(state, action) {
      state.user = null;
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const actions = accountSlice.actions;
const store = configureStore({
  reducer: accountSlice.reducer,
});
export default store;

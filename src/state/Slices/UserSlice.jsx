import { createSlice } from "@reduxjs/toolkit";
import WorkSpaceSlice from "./WorkSpaceSlice";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    id: null,
    sessionId: null,
    info: {
      name: null,
      rollno: null,
      class: null,
    },
  },
  reducers: {
    SetUserData: (state, action) => {
      Object.keys(action.payload).map((i) => {
        state[i] = action.payload[i];
      });
    },
  },
});

export const { SetUserData } = UserSlice.actions;
export default UserSlice.reducer;

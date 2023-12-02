import { createSlice } from "@reduxjs/toolkit";

export const EditorAreaSlice = createSlice({
  name: "EditorArea",
  initialState: {
    readMeVisibility: true,
    language: null,
    id: null,
    user: null,
    options: {
      preventPaste: false,
      preventAutoComplete: false,
    },
    output: {
      possible: ["instant", "onchange"],
      on: "instant",
    },
  },
  reducers: {
    SetReadMeVisibility: (state, action) => {
      state.readMeVisibility = action.payload;
    },
    SetEditorData: (state, action) => {
      Object.keys(action.payload).map((i) => {
        state[i] = action.payload[i];
      });
    },
  },
});

export const { SetReadMeVisibility, SetEditorData } = EditorAreaSlice.actions;
export default EditorAreaSlice.reducer;

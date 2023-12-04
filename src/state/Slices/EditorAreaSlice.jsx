import { createSlice } from "@reduxjs/toolkit";

export const EditorAreaSlice = createSlice({
  name: "EditorArea",
  initialState: {
    readMeVisibility: true,
    language: null,
    id: null,
    user: null,
    type: "personal",
    name: "",
    options: {
      preventPaste: false,
      preventAutoComplete: false,
    },
    navigation: {
      location: "code",
      id: null,
      sidenav: true,
    },
    output: {
      possible: ["instant", "onchange"],
      on: "instant",
      timeout: 1000,
    },
  },
  reducers: {
    SetReadMeVisibility: (state, action) => {
      state.readMeVisibility = action.payload;
    },
    OpenSideNav: (state, action) => {
      state.navigation.sidenav = action.payload;
    },
    SetEditorData: (state, action) => {
      Object.keys(action.payload).map((i) => {
        state[i] = action.payload[i];
      });
    },
    SetEditorSetting: (state, action) => {
      const { name, value } = action.payload;

      Object.keys(action.payload.value).map((i) => {
        state[name][i] = value[i];
      });
    },
  },
});

export const {
  SetReadMeVisibility,
  SetEditorData,
  SetEditorSetting,
  OpenSideNav,
} = EditorAreaSlice.actions;
export default EditorAreaSlice.reducer;

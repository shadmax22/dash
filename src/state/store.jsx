import { configureStore } from "@reduxjs/toolkit";
import EditorAreaSlice from "./Slices/EditorArea";

const store = configureStore({
  reducer: {
    EditorArea: EditorAreaSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import EditorAreaSlice from "./Slices/EditorAreaSlice";

const store = configureStore({
  reducer: {
    EditorArea: EditorAreaSlice,
  },
});

export default store;

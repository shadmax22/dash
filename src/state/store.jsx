import { configureStore } from "@reduxjs/toolkit";
import EditorAreaSlice from "./Slices/EditorAreaSlice";
import UserSlice from "./Slices/UserSlice";
import WorkSpaceSlice from "./Slices/WorkSpaceSlice";

const store = configureStore({
  reducer: {
    EditorArea: EditorAreaSlice,
    User: UserSlice,
    WorkSpace: WorkSpaceSlice,
  },
});

// const { dispatch } = store;

// export { dispatch };

export default store;

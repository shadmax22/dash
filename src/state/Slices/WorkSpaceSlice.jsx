import { createSlice } from "@reduxjs/toolkit";

export const WorkSpaceSlice = createSlice({
  name: "workspace",
  initialState: {
    list: {},
  },
  reducers: {
    loadSaved: (state, action) => {
      const saved = JSON.parse(localStorage.getItem("__wslist")) ?? false;

      if (saved) {
        state.list = saved;
      }
    },
    new: (state, action) => {
      let [id, data] = [
        action.payload.id ?? Math.floor(Math.random() * 100000),
        action.payload,
      ];

      data = {
        id: id,
        saved: false,
        savedId: false,
        ...data,
      };

      state.list[id] = data;
    },
    save: (state, action) => {
      const { id, code } = action.payload;

      const saveId = state.list[id].saveId ?? null;
      localStorage.removeItem(saveId);

      state.list[id].saveId = Math.floor(Math.random() * 10000);

      localStorage.setItem(state.list[id].saveId, code);

      localStorage.setItem("__wslist", JSON.stringify(state.list));
    },
    get: (state, action) => {
      const { id } = action.payload;
      const workspace = state.list[id];
      return {
        data: workspace,
        code: localStorage.getItem(workspace.saveId) ?? "",
      };
    },
    setOutput: (state, action) => {
      state.output = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { ...workspace } = WorkSpaceSlice.actions;

export default WorkSpaceSlice.reducer;

export function createNewEditor() {}

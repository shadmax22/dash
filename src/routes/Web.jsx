import { Navigation } from "./Navigation";
import store from "../state/store";
import {
  SetEditorData,
  SetEditorSetting,
} from "../state/Slices/EditorAreaSlice";
import { SetReadMeVisibility } from "../state/Slices/EditorAreaSlice";
import { OpenSideNav } from "../state/Slices/EditorAreaSlice";
import { useDispatch } from "react-redux";
import { workspace } from "../state/Slices/WorkSpaceSlice";

const Web = {
  home: (v) => {},
  href: (v) => {
    let SpaceInfo = store.getState().WorkSpace.list[v] ?? false;

    if (SpaceInfo) {
      store.dispatch(
        SetEditorData({
          id: SpaceInfo.id,
          name: SpaceInfo.name,
        })
      );

      store.dispatch(
        workspace.setOutput(localStorage.getItem(SpaceInfo.saveId) ?? "")
      );
      store.dispatch(
        workspace.setInput(localStorage.getItem(SpaceInfo.saveId) ?? "")
      );
    }

    store.dispatch(
      SetEditorSetting({
        name: "navigation",
        value: {
          codeId: v,
        },
      })
    );
    store.dispatch(OpenSideNav(false));
  },
  file: (v) => {},
  mode: (v) => {
    const POSSIBLE = {
      code: "code",
      home: "home",
    };
    store.dispatch(
      SetEditorSetting({
        name: "navigation",
        value: {
          location: POSSIBLE[v] ?? "home",
        },
      })
    );
  },
  readme: (v) => {
    // debugger;
    store.dispatch(OpenSideNav(v == "true" ? true : false));
  },
};

store.dispatch(workspace.loadSaved());
Navigation(Web);

export const Route = {};

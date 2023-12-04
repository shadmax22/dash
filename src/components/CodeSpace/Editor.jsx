import { useState, useCallback } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { EditorView } from "@codemirror/view";

import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";

import Validator from "../../tools/Validator";

import {
  SetEditorData,
  SetReadMeVisibility,
} from "../../state/Slices/EditorAreaSlice";

import { workspace } from "../../state/Slices/WorkSpaceSlice";
import { useEffect } from "react";

// import

export function Editor({ state, dispatch, mainState }) {
  const [value, setValue] = useState("");

  const [SaveEngine, setSaveEngine] = useState(false);

  const ChangeWork = useCallback((val, viewUpdate) => {
    if (state.readMeVisibility) {
      dispatch(SetReadMeVisibility(false));
    }

    setValue(Validator(val, mainState.WorkSpace.language));

    dispatch(workspace.setInput(val));
  }, []);

  useEffect(() => {
    clearTimeout(SaveEngine);

    setSaveEngine(
      setTimeout(() => {
        console.log("UPDATED");
        dispatch(workspace.setOutput(value));
      }, state.output.timeout ?? 1000)
    );

    return () => {};
  }, [value]);

  const PreventPaste = (e) => {
    e.nativeEvent.returnValue = state.options.PreventPaste ? false : true;
  };
  return (
    <>
      <div className="editor">
        <CodeMirror
          options={{
            lineWrapping: true,
          }}
          value={mainState.WorkSpace.input ?? ""}
          extensions={[loadLanguage("html"), EditorView.lineWrapping]}
          onChange={ChangeWork}
          onBeforeInput={(instance, obj) => {
            if (instance.data.length > 1) {
              return false;
            }
          }}
          indentWithTab={true}
          onPasteCapture={PreventPaste}
          theme={vscodeDark}
        />
      </div>
    </>
  );
}

export function Output({ mainState }) {
  return (
    <>
      <iframe
        className="w-full h-full"
        srcDoc={mainState.WorkSpace.output}
      ></iframe>
    </>
  );
}

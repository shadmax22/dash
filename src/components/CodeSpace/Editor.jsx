import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { EditorView } from "@codemirror/view";

import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";

import "./main.css";

import Validator from "../../tools/Validator";

import { BottomNav, TopNav } from "./EditorNavs";
import Readme from "./Readme";
import {
  SetEditorData,
  SetReadMeVisibility,
} from "../../state/Slices/EditorArea";
import { useEffect } from "react";

// import {} from "";
export default function Editor({ data }) {
  const EditorState = useSelector((state) => state.EditorArea);
  const Dispatcher = useDispatch();

  useEffect(() => {
    Dispatcher(SetEditorData(data));
  }, [data]);

  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const ChangeWork = useCallback((val, viewUpdate) => {
    if (EditorState.readMeVisibility) {
      Dispatcher(SetReadMeVisibility(false));
    }
    setValue(val);
    setOutput(Validator(val, "html"));
  }, []);

  const PreventPaste = (e) => {
    // alert("g");

    e.nativeEvent.returnValue = EditorState.options.PreventPaste ? false : true;
  };

  const ControlState = {
    control: { state: EditorState, dispatch: Dispatcher },
  };

  return (
    <>
      <div className="container flex">
        <div className="editor-area flex flex-col">
          <TopNav {...ControlState}></TopNav>
          <div className="editor">
            <CodeMirror
              options={{
                lineWrapping: true,
              }}
              value={value}
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
          <BottomNav></BottomNav>
        </div>

        <div className="output-area">
          <Readme {...ControlState}></Readme>
          <iframe className="w-full h-full" srcDoc={output}></iframe>
        </div>
      </div>
    </>
  );
}

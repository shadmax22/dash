import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./main.css";

import { BottomNav, SideNav, TopNav } from "./EditorNavs";
import Readme from "./Readme";
import { useEffect } from "react";
import Dashboard from "../Home/Dashboard/Dashboard";
import { workspace } from "../../state/Slices/WorkSpaceSlice";
import { Editor, Output } from "./Editor";

export default function Main() {
  const _STATE = useSelector((state) => state);
  const EditorState = _STATE.EditorArea;

  const UserState = _STATE.User;

  const Dispatcher = useDispatch();

  const ControlState = {
    state: EditorState,
    dispatch: Dispatcher,
    mainState: _STATE,
  };

  return (
    <>
      <SideNav {...ControlState}></SideNav>
      <div className="editor-module container flex">
        {EditorState.navigation.location == "code" && (
          <div className="editor-area flex flex-col">
            <TopNav {...ControlState}></TopNav>
            <Editor {...ControlState}></Editor>
            <BottomNav {...ControlState}></BottomNav>
          </div>
        )}

        <div className="output-area">
          <Output {...ControlState}></Output>
          <Readme {...ControlState}></Readme>
        </div>
      </div>
    </>
  );
}

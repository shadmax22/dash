import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faInfo,
  faInfoCircle,
  faNavicon,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import {
  OpenSideNav,
  SetEditorSetting,
  SetReadMeVisibility,
} from "../../state/Slices/EditorAreaSlice";
import List from "../Home/List";
import { Profile } from "../Home/Profile";
import { useEffect } from "react";
import { useState } from "react";

export function TopNav({ state, dispatch }) {
  const ReadMeVisibilty = state.readMeVisibility;

  return (
    <>
      <nav class="d-flex bg-white border-gray-200 dark:bg-gray-900 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="flex items-center space-x-3 rtl:space-x-reverse">
            <FontAwesomeIcon
              icon={faNavicon}
              className="text-sm"
              onClick={() => {
                dispatch(OpenSideNav(true));
              }}
            />

            <span class="self-center font-sans text-sm font-bold whitespace-nowrap dark:text-white">
              {state.name ?? "Untitled"}
            </span>
          </span>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  className="bg-slate-800 px-4 py-2 flex items-center gap-2 text-xs rounded-2xl "
                  onClick={() => {
                    dispatch(
                      SetReadMeVisibility(ReadMeVisibilty ? false : true)
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                  HELP
                </button>
              </li>
              <li>
                <button className="bg-slate-800 px-4 py-2 flex items-center gap-2 text-xs rounded-2xl ">
                  <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>SUBMIT
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function BottomNav() {
  return (
    <>
      <nav
        className="py-2 px-4 flex text-xs font-bold items-center gap-2"
        style={{ background: "#400040" }}
      >
        <FontAwesomeIcon icon={faCode} className="text-sm" />
        HTML
      </nav>
    </>
  );
}

export function SideNav({ state, dispatch }) {
  const SideNavVisibleStat =
    state.navigation.location == "home" || state.navigation.sidenav;

  const [SideNavVisibility, setSideNavVisibty] = useState(SideNavVisibleStat);
  const [customClass, setCustomClass] = useState("");
  // let g = useSelector((s) => s.EditorArea);

  useEffect(() => {
    if (SideNavVisibleStat) {
      setSideNavVisibty(true);
    } else {
      setCustomClass("anim-PopFromLeftToRight-revert");
      setTimeout(() => {
        setSideNavVisibty(false);
        setCustomClass("");
      }, 200);
    }
  }, [SideNavVisibleStat]);

  return SideNavVisibility ? (
    <>
      {state.navigation.location != "home" && (
        <div
          className="sideNavHider"
          onClick={() => {
            dispatch(OpenSideNav(false));
          }}
        ></div>
      )}

      <div className={"sideNav flex flex-col px-4 py-10 " + customClass}>
        <Profile></Profile>
        <div className="list">
          <List></List>
        </div>

        <div className="w-full footer p-3 flex justify-center">
          <b className="font-sans">
            DASH <span className="text-xs">V1.0</span>
          </b>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

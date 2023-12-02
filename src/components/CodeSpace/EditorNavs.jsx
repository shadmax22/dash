import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faInfo,
  faInfoCircle,
  faNavicon,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";

import { SetReadMeVisibility } from "../../state/Slices/EditorArea";

export function TopNav({ control }) {
  const Dispatcher = useDispatch();

  const ReadMeVisibilty = control.state.readMeVisibility;

  return (
    <>
      <nav class="d-flex bg-white border-gray-200 dark:bg-gray-900 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <FontAwesomeIcon icon={faNavicon} className="text-sm" />

            <span class="self-center font-sans text-sm font-bold whitespace-nowrap dark:text-white">
              {control.state.name ?? "Untitled"}
            </span>
          </a>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  className="bg-slate-800 px-4 py-2 flex items-center gap-2 text-xs rounded-2xl "
                  onClick={() => {
                    control.dispatch(
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

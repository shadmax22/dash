import List from "../List/List";
import { SetUserData } from "../../../state/Slices/UserSlice";
import { workspace } from "../../../state/Slices/WorkSpaceSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faFile } from "@fortawesome/free-solid-svg-icons";
import { SetEditorSetting } from "../../../state/Slices/EditorAreaSlice";
import style from "./index.module.css";
export function Profile({ mainState, dispatch }) {
  const user = mainState.User;
  let Files = Object.keys(mainState.WorkSpace.list).map(function (key) {
    const a = mainState.WorkSpace.list[key];
    return {
      id: a.id,
      title: a.name,
      icon: faFile,
      click: () => {
        window.location.href = "#mode=code&href=" + a.id;
      },
    };
  });

  return (
    <>
      <div className={style["profile-module"] + " flex flex-col py-3 gap-2"}>
        <h1>Hello {user.info.name ?? "User"},</h1>
        <b>{user.info.rollno ?? "BECXXXXXXX"}</b>

        <div className="flex justify-between mt-3 mb-3">
          <button>SETTINGS</button>
          <button>LOG OUT</button>
        </div>
      </div>

      <div className="list">
        <List
          name="Your WorkSpace"
          data={Files}
          footer={
            <b
              onClick={() => {
                const SpaceId = Math.floor(Math.random() * 1000000);
                dispatch(
                  workspace.new({
                    id: SpaceId,
                    name: "UNTITLED",
                    type: "testdrive",
                  })
                );

                window.location.href = "#mode=code&href=" + SpaceId;
              }}
              className="mt-3 text-xs font-sans flex gap-2 items-center justify-center hover:bg-slate-700 p-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>CREATE NEW
            </b>
          }
        ></List>
      </div>
    </>
  );
}

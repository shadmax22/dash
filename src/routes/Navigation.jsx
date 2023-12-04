import store from "../state/store";
import { SetEditorSetting } from "../state/Slices/EditorAreaSlice";

export function Navigation(data) {
  window.onload = HandleChange;
  window.addEventListener("popstate", HandleChange);

  function HandleChange(event) {
    const url = event.target.location.href;

    // debugger;
    let R = (url.split("#")[1] ?? null).split("&");

    R.map((v) => {
      const [key, value] = v.split("=");

      try {
        console.log(key, value, data);
        data[key](value);
      } catch (e) {
        console.log(e);
        console.log("ROUTE NOT FOUND", key, value, data);
      }
    });
  }
}

import Card from "./Card";
import List from "./List";
import "./index.css";
export default function Dashboard({ state, dispatch }) {
  console.log(state?.navigation?.location);
  return state?.navigation?.location == "home" ? (
    <>
      <div className="dashboard-module">
        <h1>
          Welcome to DASH{" "}
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>V1.0</span>
        </h1>

        <hr />

        <ul>
          <li>
            Learn, Write & Execute, Seemless experience, Perfect for learning.
          </li>
          <li>Feel the coding power !! Make coding professional.</li>
          <li>Supported in all screens !!</li>
          <li>Make coding passion, Cause it built by DASH 😜</li>
        </ul>

        <blockquote>
          <span style={{ fontSize: "40px" }}>B</span>E THE GREATEST STUPID IN
          THE WORLD, CAUSE THEY ARE THE ONLY ONE WHO NEVER STOPS TRYING.
        </blockquote>

        <h2 className="p-2 mt-10 font-bold">ASSIGNED TASKS</h2>

        <div className="flex gap-1 flex-wrap">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <h2 className="p-2 mt-10 font-bold">SUBMISSIONS</h2>

        <div className="flex gap-1 flex-wrap">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <div className="p-20"></div>
      </div>
    </>
  ) : (
    <></>
  );
}

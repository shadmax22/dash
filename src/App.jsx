import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Auth from "./utils/Auth";
import Editor from "./components/CodeSpace/Editor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Auth>
        <Editor
          data={{
            id: "1SF3221321",
            name: "HELLO WORLD",
            readMeVisibility: true,
          }}
        ></Editor>
      </Auth>
    </>
  );
}

export default App;

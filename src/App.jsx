import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Auth from "./utils/Auth";
import Main from "./components/CodeSpace/Main";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import { Route } from "./routes/Web";
function App() {
  return (
    <>
      <Auth>
        {/* <Dashboard></Dashboard> */}
        <Main></Main>
      </Auth>
    </>
  );
}

export default App;

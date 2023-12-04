import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SetReadMeVisibility } from "../../state/Slices/EditorAreaSlice";
import Dashboard from "../Home/Dashboard/Dashboard";

export default function Readme({ code, visibility = true, state, dispatch }) {
  const ReadMeVisibilty = state.readMeVisibility;

  const [customClass, setCustomClass] = useState("");
  const [visibleStat, setVisibleStat] = useState(ReadMeVisibilty);

  useEffect(() => {
    if (ReadMeVisibilty) {
      setCustomClass("anim-PopFromLeftToRight");

      setVisibleStat(true);
    } else {
      setCustomClass("anim-PopFromBottomToTop-revert");
      setTimeout(() => {
        setCustomClass("");
        setVisibleStat(false);
      }, 200);
    }
  }, [ReadMeVisibilty]);

  return visibleStat ? (
    <>
      <div
        className={"readme-cont " + customClass}
        style={state.navigation.location == "home" ? { width: "80vw" } : {}}
      >
        <Dashboard state={state} dispatch={dispatch}></Dashboard>
        {/* <iframe srcDoc={code ?? DefaultReadMe}></iframe> */}
      </div>
    </>
  ) : (
    <></>
  );
}

const DefaultReadMe = `<html>
  <head>
    
    <style>

      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

      
      body{
        background:#01041c;
        font-family: 'Inter', sans-serif;
        color:white;
        font-weight:100;
        padding: 30px;
        
      }

      ul li{
        padding: 10px;
        background: #1a1f46;
        margin-bottom: 10px;
        border-bottom-right-radius: 12px;
      }
      blockquote{
        margin-top: 40px;
      }
     
    </style>
  </head>
  <body>
    
    <h1>Welcome to DASH <span style="font-size:20px;font-weight:bold">V1.0</span></h1>

    <hr>

    <ul>
      <li>
        Learn, Write & Execute, Seemless experience, Perfect for learning. 
      </li>
      <li>
        Feel the coding power !! Make coding professional.
      </li>
      <li>
        Supported in all screens !!
      </li>
      <li>
        Make coding passion, Cause it built by DASH 😜
      </li>
    </ul>

    <blockquote>
      <span style="font-size: 40px">B</span>E THE GREATEST STUPID IN THE WORLD, CAUSE THEY ARE THE ONLY ONE WHO NEVER STOPS TRYING.
    </blockquote>


    
    
    
  </body>
</html>`;

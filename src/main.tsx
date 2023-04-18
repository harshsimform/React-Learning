import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import CompA from "./ContextExample/CompA";
import MyReducer from "./ReducerExample/MyReducer";
import MyReducer2 from "./ReducerExample/MyReducer2";
import MyEffect from "./EffectExample/MyEffect";
import "./index.css";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//     {/* <Comp1 /> */}
//     {/* <Comp2 /> */}
//   </React.StrictMode>
// );

const rootElement: HTMLElement = document.querySelector("#root")!;
createRoot(rootElement).render(
  <React.StrictMode>
    {/* <App fname="harsh" age={21} /> */}
    {/* <Comp1/>
    <Comp2/> */}
    {/* <CompA /> */}
    {/* <MyReducer /> */}
    {/* <MyReducer2 /> */}
    <MyEffect />
  </React.StrictMode>
);

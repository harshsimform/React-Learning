import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
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
    <App fname="harsh" age={21} />
    {/* <Comp1/>
    <Comp2/> */}
  </React.StrictMode>
);

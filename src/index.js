import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  // <h1>hi there</h1>
  // </React.StrictMode>
);
reportWebVitals();

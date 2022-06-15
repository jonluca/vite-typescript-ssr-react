import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

const container = document.getElementById("app");

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// @ts-ignore
if (import.meta.hot) {
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}

import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

const container = document.getElementById("app");

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_LRT_OR_RTL === "rtl" ? "/" : "/"}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}

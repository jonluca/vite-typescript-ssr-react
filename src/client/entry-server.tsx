import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";
import { StaticRouterContext } from "react-router";
import "./index.css";

export function render(url: string, context: StaticRouterContext) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}

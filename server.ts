import fs from "fs";
import express, { Express, RequestHandler } from "express";
import { createServer as createViteServer } from "vite";
import serveStatic from "serve-static";
import compression from "compression";
import { getApi } from "./src/server/routes/api";
import { ServerResponse } from "http";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

const createServer = async (root = process.cwd(), isProd = process.env.NODE_ENV === "production") => {
  const localResolve = (p: string) => resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(localResolve("./client/index.html"), "utf-8") : "";

  const app: Express = express();
  app.use(express.json() as RequestHandler);
  app.use(express.urlencoded({ extended: true }) as RequestHandler);

  let vite: any;

  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    const requestHandler = serveStatic<ServerResponse>(localResolve("./client"), {
      index: false,
    }) as RequestHandler;
    app.use(requestHandler);
  }

  app.use("/api", getApi);

  app.use("*", async ({ originalUrl }, res) => {
    try {
      const url = originalUrl;

      let template;
      let render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(localResolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/client/entry-server.tsx")).render;
      } else {
        template = indexProd;
        const entryServer = require("./server/entry-server.js");
        render = entryServer.render;
      }

      const appHtml = render(url);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e: any) {
      !isProd && vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
};

createServer().then(({ app }) => {
  const port = process.env.PORT || 7456;
  app.listen(Number(port), "0.0.0.0", () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
});

// for test use
export { createServer };

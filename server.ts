import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";
import serveStatic from "serve-static";
import compression from "compression";
import { getApi } from "./src/server/routes/api";

const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;

const createServer = async (root = process.cwd(), isProd = process.env.NODE_ENV === "production") => {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve("./client/index.html"), "utf-8") : "";

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  let vite: any;

  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: isTest ? "error" : "info",
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too ft and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(
      serveStatic(resolve("./client"), {
        index: false,
      }),
    );
  }

  app.use("/api", getApi);

  app.use("*", async ({ originalUrl }, res) => {
    try {
      const url = originalUrl;

      let template;
      let render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/client/entry-server.tsx")).render;
      } else {
        template = indexProd;
        const entryServer = require("./server/entry-server.js");
        render = entryServer.render;
      }

      const context: any = {};
      const appHtml = render(url, context);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url);
      }

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
};

createServer().then(({ app }) => {
  const port = process.env.PORT || 7456
  app.listen(Number(port), "0.0.0.0", () => {
    console.log(`App is listening on port ${port}`);
  });
});

// for test use
export { createServer };

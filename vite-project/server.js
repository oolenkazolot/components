import express from 'express';
import ReactDOMServer from 'react-dom/server';

const bootstrap = async () => {
  const app = express();
  const cwd = process.cwd();
  // dev mode, configure vite as middleware
  const vite = await (
    await import('vite')
  ).createServer({
    root: cwd,
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

    const { jsx, preloadedState } = await render({ path: url });

    const containerSelector = 'app';
    //res.socket.on('error', (error) => console.log('Fatal', error));

    let didError = false;

    const { pipe } = ReactDOMServer.renderToPipeableStream(jsx, {
      container: containerSelector,
      bootstrapModules: ['/src/entry-client.tsx'],
      bootstrapScriptContent: `window.__PRELOADED_STATE__ = ${JSON.stringify(
        preloadedState
      ).replace(/</g, '\\u003c')}`,
      onShellReady: () => {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        pipe(res);
      },
      onError: (error) => {
        didError = true;
        console.log(error);
      },
    });
  });

  return { app };
};

const port = 3000;
bootstrap()
  .then(async ({ app }) => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);

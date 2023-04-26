import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Router } from './router';
import { App } from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './main.scss';

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App />
        <Router />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  return { appHtml, preloadedState };
};

import { StaticRouter } from 'react-router-dom/server';
import { Router } from './router';
import { App } from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './main.scss';
import { Html } from './Html';

interface IRenderProps {
  path: string;
}

export const render = async ({ path }: IRenderProps) => {
  const preloadedState = store.getState();

  const jsx = (
    <Html title="Rick and Morty">
      <Provider store={store}>
        <StaticRouter location={path}>
          <App />
          <Router />
        </StaticRouter>
      </Provider>
    </Html>
  );

  return { jsx, preloadedState };
};

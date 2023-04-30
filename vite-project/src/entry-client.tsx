import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { Router } from './router';
import store from './redux/store';
import './main.scss';
import { RootState } from './redux/store';

const preloadedState = (window as Window & typeof globalThis & { __PRELOADED_STATE__: RootState })
  .__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store} serverState={preloadedState}>
    <BrowserRouter>
      <App />
      <Router />
    </BrowserRouter>
  </Provider>
);

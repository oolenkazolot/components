import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { Router } from './router';
import store from './redux/store';
import './main.scss';

const preloadedState = (window as any).__PRELOADED_STATE__; // Get the initial state from the server

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <Provider store={store} serverState={preloadedState}>
    <BrowserRouter>
      <App />
      <Router />
    </BrowserRouter>
  </Provider>
);

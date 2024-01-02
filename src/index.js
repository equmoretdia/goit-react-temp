import React from 'react';
import ReactDom from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

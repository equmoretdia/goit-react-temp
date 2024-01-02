import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

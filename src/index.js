import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-temp">
      {/* <BrowserRouter basename="https://github.com/equmoretdia/goit-react-temp"> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

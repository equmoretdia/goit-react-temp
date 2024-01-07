import React from 'react';
import ReactDom from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(
  // ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-temp">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// document.getElementById('root')
// );

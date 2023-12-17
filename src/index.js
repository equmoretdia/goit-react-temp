import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App.jsx';
import AuthProvider from './contexts/auth/Provider.jsx';
import './index.css';

const root = document.getElementById('root');
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

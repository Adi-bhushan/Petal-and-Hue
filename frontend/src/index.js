import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Change the theme to Cosmo (a clean, light theme)
import 'bootswatch/dist/cosmo/bootstrap.min.css';
// 2. We will keep our custom CSS file for the new palette
import './index.css';
import App from './App';
import { StoreProvider } from './context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
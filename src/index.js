import React from 'react';
import ReactDOM from 'react-dom/client';
import 'portfolio/src/App.css';
import App from 'portfolio/src/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

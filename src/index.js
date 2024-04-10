import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

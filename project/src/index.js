import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

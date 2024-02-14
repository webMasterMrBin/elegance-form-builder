import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Demo } from './Demo';
import { App } from './App';
import './styles/app.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

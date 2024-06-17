import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, initialState } from './app/App';
import { StateManager } from './state-manager';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateManager initialState={initialState}>
    <App />
  </StateManager>
);
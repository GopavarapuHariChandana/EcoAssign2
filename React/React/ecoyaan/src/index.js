import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Use ReactDOM.render for rendering
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

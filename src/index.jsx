import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import Page from './Page';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Page />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);

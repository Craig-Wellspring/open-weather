import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Initialize from './components/Initialize';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Initialize />
  </React.StrictMode>,
  document.getElementById('root'),
);

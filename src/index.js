import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Favicon url="./images/favion.ico" />
    <App />
  </div>
  , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.querySelector('#main'));
registerServiceWorker();

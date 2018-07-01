import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Random} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Random />, document.getElementById('root'));
registerServiceWorker();

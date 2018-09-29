import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Sjakk from './components/Sjakk';

ReactDOM.render(
	<Sjakk />,
	document.getElementById('root')
);

registerServiceWorker();

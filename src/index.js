import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stickey-footer.css';

ReactDOM.render(<App />, 
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './components/App';
import Homepage from './components/Homepage';
import About from './components/About';

import './styles/main.scss';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Homepage}/>
  		<Route path="about" component={About}/>
  	</Route>
  </Router>,
  document.getElementById('root')
);

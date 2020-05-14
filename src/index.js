import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserHistory } from 'history';
import { HashRouter } from 'react-router-dom';

const trackingId = "UA-165853599-1";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); 
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <HashRouter history={history} basename="/"><App /></HashRouter>,
  document.getElementById('root')
);

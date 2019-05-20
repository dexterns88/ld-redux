import React from 'react';
import { hydrate } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../universal/routes';
import { Provider } from 'react-redux';
import createStore from '../universal/redux/store';
import ldRedux from 'ld-redux';
import flags from '../../flags.json';

const reduxState = window.__INITIAL_STATE__ || undefined;
const store = createStore(reduxState);

ldRedux.init({
  clientSideId: '59b2b2596d1a250b1c78baa4',
  dispatch: store.dispatch,
  flags,
});

hydrate(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('reactDiv'),
);

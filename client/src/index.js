import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// store takes an arrow function which is list of combined reducers initial state and middleware
const store = createStore(reducers, {}, applyMiddleware());
// top level is provider as provider connects react to react redux
ReactDOM.render(
  // make sure Provider component contains store and child of provider is app component
  // provider makes sure when the store is changed all the child components will know
  // and update child compnets with new state
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

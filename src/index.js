import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {HashRouter} from 'react-router-dom';
// import routes from './routes';
import promise from 'redux-promise'
import App from './components/app'
// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider >
    <App/>
  </Provider>
  , document.querySelector('.container'));

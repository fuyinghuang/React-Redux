import React from 'react';
import ReactDOM from 'react-dom';

//Reducer stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import reducers from './reducers';
import './index.css';


const storeMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
  <Provider store={storeMiddleware(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
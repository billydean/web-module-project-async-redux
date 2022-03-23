import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import reducer from './state/reducer'

//Redux Imports
import {createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

//Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

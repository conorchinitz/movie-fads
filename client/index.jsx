import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './App';
import './styles/styles.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

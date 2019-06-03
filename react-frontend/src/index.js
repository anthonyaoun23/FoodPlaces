import React from 'react';
import ReactDOM from 'react-dom';

// Redux Stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';


import App from './App';
import './style/App.css';

const middleware = [ thunk ];
if (ProcessingInstruction.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllProducts());

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

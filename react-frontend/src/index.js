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

const Comp = () => (
  <Provider store={store}><App/></Provider>
)

const middleware = [ thunk ];
// if (ProcessingInstruction.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
middleware.push(createLogger());

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllProducts());

ReactDOM.render(
  Comp(),
  document.getElementById('root')
);

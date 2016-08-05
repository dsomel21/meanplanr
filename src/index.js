import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router'; 
import reducers from './reducers';
// import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
	return createStore(
		reducers,
		initialState,
		applyMiddleware(thunk)
	);
}

const createStoreWithMiddleware = configureStore();

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

/* Provider is a higher order component that connects store to containers */

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('.container')
);
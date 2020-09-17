import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>
        <App />
    </Provider>,
    document.getElementById('root')
)
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';

import rootReducer from './reducers';

import './styles/styles.css';

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render((
    <Provider store={store}>
        <App />
    </Provider>
    ), document.getElementById('app')
);

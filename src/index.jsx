import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import ActiveElections from './components/ActiveElections';

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={ActiveElections} />
            </Route>
        </Router>
    </Provider>
    ), document.getElementById('app')
);

/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import MovieContainer from './container/MovieContainer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware)
);

const App = () => {
    return (
        <Provider store={store}>
            <MovieContainer />
        </Provider>
    );
};

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('ReduxSagaApp', () => App);
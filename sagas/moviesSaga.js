/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import  {  FETCH_MOVIES , FETCH_SUCCEED , FETCH_FAILED } from '../actions/actionTypes' ;

import { put , takeLatest } from 'redux-saga/effects';

import { Api } from './Api';

function* fetchMovies () {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type : FETCH_SUCCEED , receivedMovies : receivedMovies });
    } catch( error ) {
        yield put({ type: FETCH_FAILED , error });
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
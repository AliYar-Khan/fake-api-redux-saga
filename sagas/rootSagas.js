/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import { call } from 'redux-saga/effects';

import { watchFetchMovies } from './moviesSaga';

export default function* rootSaga() {
    yield call(watchFetchMovies);
}

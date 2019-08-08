/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import  { ADD_MOVIE , FETCH_SUCCEED , FETCH_FAILED } from '../actions/actionTypes' ;

const movieReducers = ( movies = [] , action ) => {
    switch ( action.type ) {
        case FETCH_SUCCEED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            return [
                ...movies,
                action.newMovie
            ];
        default:
            return movies;
    }
}

export default movieReducers;
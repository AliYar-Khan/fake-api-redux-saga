/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import  { ADD_MOVIE , FETCH_MOVIES , FETCH_SUCCEED , FETCH_FAILED } from './actionTypes' ; 

export const fetchMoviesAction = (sort) => {
    return {
        type : FETCH_MOVIES,
        sort
    }
}

export const addMovieAction = (newMovie) => {
    return {
        type : ADD_MOVIE , 
        newMovie
    }
}

//action send by redux saga

export const fetchSuccessAction = (receivedMoives) => {
    return {
        type : FETCH_SUCCEED , 
        receivedMoives
    }
}

export const fetchFailedAction = (error) => {
    return {
        type : FETCH_FAILED , 
        error
    }
}
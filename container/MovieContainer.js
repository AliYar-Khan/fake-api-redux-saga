/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import { connect } from 'react-redux' ; 
import MovieComponent from '../components/MovieComponent' ; 
import { addMovieAction , fetchMoviesAction , fetchSuccessAction , fetchFailedAction } from '../actions' ;


const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies : () => {
            dispatch(fetchMoviesAction());
        },
        onAddMovies : (newMovie) => {
            dispatch(addMovieAction(newMovie));
        }
    };
};

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);
export default MovieContainer;
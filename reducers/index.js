/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import { combineReducers } from 'redux';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
    movieReducers,
});

export default allReducers;
/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/


const urlGetMovies = 'http://localhost:3000/movies';

function* getMoviesFromApi(){
    const response = yield fetch(urlGetMovies,{
        method : 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []       
    return movies;  
}

export const Api = {
    getMoviesFromApi
};
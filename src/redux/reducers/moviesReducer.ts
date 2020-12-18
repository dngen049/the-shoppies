import { ADDMOVIETOTHENOMINIES, Movie, movieActionType, REMOVEMOVIE, SAVESEARCHRESULTS, SETSEARCHTERM } from "../constant"


interface MovieReducerState {
    searchTerm: string,
    movies: Movie[],
    nominatedMovies: Movie[]
}

const initialState: MovieReducerState  = {
    searchTerm: "",
    movies: [],
    nominatedMovies: []
}

const moviesReducer = (state = initialState, action: movieActionType) => {

    switch(action.type){
        case SETSEARCHTERM:
            return {...state, searchTerm: action.searchTerm};
        case SAVESEARCHRESULTS:
            return {...state, movies: action.results};
        case ADDMOVIETOTHENOMINIES:
            let newNominies =  [...state.nominatedMovies, {...action.movie}]
            const moviesCopy = [...state.movies];
            moviesCopy[action.index] = {...action.movie};
            return {...state, movies:[...moviesCopy], nominatedMovies: [...newNominies]};
        case REMOVEMOVIE: 
            const Nominies =  state.nominatedMovies.filter((m: Movie) => m.name !==  action.movie.name && m.releaseYear !== action.movie.releaseYear);
            const copyOfMovies =  state.movies ? [...state.movies] : [];
            const index = copyOfMovies?.findIndex((m:Movie) => m.name ===  action.movie.name && m.releaseYear === action.movie.releaseYear);
            if(index !== -1){
                copyOfMovies[index] = {...action.movie, isNominated:false};
            }
            return {...state, movies:[...copyOfMovies], nominatedMovies: [...Nominies] }

        default:
            return state;
    }

}
export default moviesReducer;
import { ADDMOVIETOTHENOMINIES, Movie, REMOVEMOVIE, ReqStatus, SAVESEARCHRESULTS, SETSEARCHTERM, SET_SEARCH_REQ_ERROR, SET_SEARCH_REQ_STATUS } from "./constant"


export const setSearchTerm = (searchTerm: string) => {
    return {
        type: SETSEARCHTERM,
        searchTerm,
    }
}

export const saveSearchResultsAction =  (results: Movie[]) =>  {
    return {
        type: SAVESEARCHRESULTS,
        results,
    }
}

export const addMovieToTheNominies = (movie: Movie, index: number) => {
    return {
        type: ADDMOVIETOTHENOMINIES,
        movie,
        index,
    }
}
export const removeMovieFromTheNominies = (movie: Movie) => {
    return {
       type: REMOVEMOVIE,
       movie,
    }
}

export const setSearchReqStatus =  (reqStatus:ReqStatus) => {
    return {
        type: SET_SEARCH_REQ_STATUS,
        reqStatus
    }
}

export const setSearchReqError = (reqError: string) => {
    return {
        type: SET_SEARCH_REQ_ERROR,
        reqError
    }
}

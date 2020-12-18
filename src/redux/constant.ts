export const SETSEARCHTERM = 'SETSEARCHTERM';
export const SAVESEARCHRESULTS = 'SAVESEARCHRESULTS';
export const ADDMOVIETOTHENOMINIES = 'ADDMOVIETOTHENOMINIES';
export const REMOVEMOVIE = 'REMOVEMOVIE';

export const SET_SEARCH_REQ_STATUS = 'SET_SEARCH_REQ_STATUS';
export const SET_SEARCH_REQ_ERROR = 'SET_SEARCH_REQ_ERROR';


export enum ReqStatus{
    INIT = "INIT",
    PENDING = "PENDING" ,
    OK = "OK",
    ERROR = "ERROR"

}

export interface Movie{
    name: string,
    releaseYear: string,
    isNominated: boolean,
}


interface setSearchTermAction{
    type: typeof SETSEARCHTERM,
    searchTerm: string,
}

interface saveSearchResultsAction{
    type: typeof SAVESEARCHRESULTS,
    results: Movie[],
}

interface addMovieToTheNominiesAction{
    type: typeof ADDMOVIETOTHENOMINIES,
    movie: Movie,
    index: number
}

interface removeMovieFromTheNominiesAction{
    type: typeof REMOVEMOVIE,
    movie: Movie,
}

interface setSearchReqStatusAction {
    type: typeof SET_SEARCH_REQ_STATUS,
    reqStatus: ReqStatus
}

interface setSearchReqErrorAction {
    type: typeof SET_SEARCH_REQ_ERROR,
    reqError: string
}

export type movieActionType = setSearchTermAction | saveSearchResultsAction | addMovieToTheNominiesAction | removeMovieFromTheNominiesAction;

export type requestActionType =  setSearchReqStatusAction | setSearchReqErrorAction;
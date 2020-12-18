import { notification } from 'antd';
import React from 'react';

import { useAppDispatch, useSelector } from '../../redux';
import { addMovieToTheNominies } from '../../redux/action';
import { Movie } from '../../redux/constant';

import ResultComponentView from './ResultComponentView';

const ResultComponent: React.FC = () => {

    const {searchTerm, movies} = useSelector((state) => state.movie);
    const {searchResultReqStatus, searchResultReqError} = useSelector((state) => state.request);
     const dispatch = useAppDispatch();

    const handleNominate = (movie: Movie, index: number) => {
        dispatch(addMovieToTheNominies(movie, index));
        notification.success({
            message: "Success",
            description: `The movie ${movie.name}-${movie.releaseYear} was added to the nomination list successfully!!`
        })
    }
    
    return <ResultComponentView 
            searchResultReqStatus={searchResultReqStatus}
            searchResultReqError={searchResultReqError} 
            searchTerm={searchTerm} 
            movies={movies}
            handleNominate={handleNominate}/>
}

export default ResultComponent;
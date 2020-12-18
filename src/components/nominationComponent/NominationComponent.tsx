import React from 'react';

import { useAppDispatch, useSelector } from '../../redux';
import { removeMovieFromTheNominies } from '../../redux/action';
import { Movie } from '../../redux/constant';

import { notification } from 'antd';
import NominationComponentView from './NominationComponentView';

const NominationComponent: React.FC = () => {
    const {nominatedMovies} = useSelector((state) => state.movie);
    const dispatch = useAppDispatch();
    
    const handleNominate = (movie : Movie ) => {
        dispatch(removeMovieFromTheNominies(movie));
        notification.success({
            message: "Success",
            description: `The movie ${movie.name}-${movie.releaseYear} was removed from the nomination list successfully!!`
        })
    }

    return <NominationComponentView handleNominate={handleNominate} nominatedMovies={nominatedMovies}/>
}


export default NominationComponent;
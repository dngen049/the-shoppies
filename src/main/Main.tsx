import React from 'react';

import { useSelector } from '../redux';

import MainView from './MainView';

const Main: React.FC = () => { 
    const {nominatedMovies} = useSelector((state) => state.movie);

    return <MainView showBanner={nominatedMovies.length >= 5} />
}

export default Main;
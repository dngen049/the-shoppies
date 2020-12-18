import React from 'react';
import SearchComponentView from './SearchComponentView';

import { useAppDispatch, useSelector} from "./../../redux";
import { saveSearchResultsAction, setSearchReqError, setSearchReqStatus, setSearchTerm } from '../../redux/action';
import { getMovies } from '../../services/api';
import { Movie, ReqStatus } from '../../redux/constant';


const SearchComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const {searchTerm, nominatedMovies } = useSelector((state) => state.movie);

    const isNominated = (Title: string, Year: string) => {
        return !!nominatedMovies.find((m: Movie) => m.name === Title && m.releaseYear === Year);
    }

    const handleSearchChange = async (value: string) => {
        dispatch(setSearchTerm(value));
        dispatch(setSearchReqStatus(ReqStatus.PENDING));
        dispatch(setSearchReqError(""));
        try{
            const res = await getMovies(value)
            const movies = res.data.Search?.map((m:any) => ({ "name": m.Title, "releaseYear": m.Year , "isNominated": isNominated(m.Title, m.Year) }));
            dispatch(saveSearchResultsAction(movies))
            dispatch(setSearchReqStatus(ReqStatus.OK));
        }catch(error){
            dispatch(setSearchReqStatus(ReqStatus.ERROR));
            dispatch(setSearchReqError("Something went wrong!. Please try again later"));
        }
    }
    
    return <SearchComponentView
            searchTerm={searchTerm} 
            handleSearchChange={handleSearchChange}/>

}

export default SearchComponent;
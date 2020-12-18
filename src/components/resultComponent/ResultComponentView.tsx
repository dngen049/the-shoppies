import React from 'react';

import { Alert, Button, Card, Skeleton } from 'antd';
import { Movie, ReqStatus } from '../../redux/constant';

interface ResultComponentViewProps{
    searchTerm:string,
    movies: Movie[],
    searchResultReqStatus: ReqStatus
    searchResultReqError: string,
    handleNominate: (movie: Movie, index: number) => void
}

const ResultComponentView: React.FC<ResultComponentViewProps> = ({searchTerm, movies, searchResultReqStatus, searchResultReqError, handleNominate}) => (
    <Card title={`Result for ${searchTerm}`} >
        <Skeleton active loading={searchResultReqStatus === ReqStatus.PENDING}  paragraph={{ rows: 5 }}/>
        {searchResultReqStatus === ReqStatus.OK && (
            <ul>
                {movies?.map((m: Movie, i: number) => (
                    <li key={i}>{m.name} ({m.releaseYear}) <Button disabled={m.isNominated} onClick={() => handleNominate({...m, isNominated: true}, i)}>Nominate</Button> </li>
                ) )}
            </ul>
        )}
        {searchResultReqStatus === ReqStatus.ERROR && (
            <Alert type="error" 
            message="Error"
            description={searchResultReqError}
            showIcon/>
        )} 
        
    </Card>
)

export default ResultComponentView;
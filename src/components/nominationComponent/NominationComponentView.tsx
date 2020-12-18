import React from 'react';

import { Button, Card } from 'antd';
import { Movie } from '../../redux/constant';

interface NominationComponentViewProps{
    nominatedMovies: Movie[],
    handleNominate: (movie: Movie) => void
}
const NominationComponentView: React.FC<NominationComponentViewProps> = ({nominatedMovies, handleNominate}) => (
    <Card title="Nominations ">
        <ul>
            {nominatedMovies?.map((m: Movie, i: number) => (
                <li key={i}>{m.name} ({m.releaseYear}) <Button onClick={() => handleNominate(m)} >Remove</Button> </li>
            ) )}
        </ul>
    </Card>
)

export default NominationComponentView;
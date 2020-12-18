import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Movie } from '../../redux/constant';

import { Button, Card } from 'antd';

import './NominationComponent.css';

interface NominationComponentViewProps{
    nominatedMovies: Movie[],
    handleNominate: (movie: Movie) => void
}
const NominationComponentView: React.FC<NominationComponentViewProps> = ({nominatedMovies, handleNominate}) => (
    <Card title="Nominations ">
        <ul>
            <TransitionGroup>
                {nominatedMovies?.map((m: Movie, i: number) => (
                    <CSSTransition 
                    key={i}
                    timeout={500}
                    classNames="item">
                        <li >{m.name} ({m.releaseYear}) <Button onClick={() => handleNominate(m)} >Remove</Button> </li>
                    </CSSTransition>
                ) )}
            </TransitionGroup>
        </ul>
    </Card>
)

export default NominationComponentView;
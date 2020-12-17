import React from 'react';

import { Button, Card } from 'antd';


const ResultComponentView: React.FC = () => (
    <Card title="Result for .." >
        <ul>
            <li>Rambo (1999) <Button disabled>Nominate</Button> </li>
            <li>Creed (2017) <Button>Nominate</Button> </li>
            <li>Creed 2 (2018) <Button>Nominate</Button> </li>
        </ul>
    </Card>
)

export default ResultComponentView;
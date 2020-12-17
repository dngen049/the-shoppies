import React from 'react';

import { Button, Card } from 'antd';


const NominationComponentView: React.FC = () => (
    <Card title="Nominations ">
        <ul>
            <li>Rambo (1999) <Button>Remove</Button> </li>
        </ul>
    </Card>
)

export default NominationComponentView;
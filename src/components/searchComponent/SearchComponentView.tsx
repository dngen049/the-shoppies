import React from 'react';

import { Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const SearchComponentView: React.FC = () => (
    <Card title="Movie title" >
        <Input size="large" placeholder="movie title" prefix={<SearchOutlined />}></Input>
    </Card>
)

export default SearchComponentView;
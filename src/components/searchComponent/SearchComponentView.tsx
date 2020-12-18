import React from 'react';

import { Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchComponentViewProps {
    searchTerm:string,
    handleSearchChange: (value: string) => void,
}
const SearchComponentView: React.FC<SearchComponentViewProps> = ({
    searchTerm, handleSearchChange
}) => (
    <Card title="Movie title" >
        <Input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} size="large" placeholder="movie title" prefix={<SearchOutlined />}></Input>
    </Card>
)

export default SearchComponentView;
import React from 'react';
import { Button } from 'antd';
import { Layout } from 'antd'
import './App.css';

const {Content} = Layout;

const App: React.FC = () => (

  <Layout>
    <Content>
      <Button type="primary">Button</Button>

    </Content>
  </Layout>
);

export default App
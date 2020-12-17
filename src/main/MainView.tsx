import React from 'react';

import {  Row, Col } from 'antd'
import Title from 'antd/lib/typography/Title';
import { NominationComponent, ResultComponent, SearchComponent } from './../components';

import './Main.css';

const MainView:React.FC =() => (
  <Row 
    justify="start"
    className="Container">
      
      <Title>The Shoppies</Title>
      <Row 
      justify="center"
      align="middle"
      className="Content"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
        <SearchComponent />
        </Col>
      </Row>
      <Row 
      justify="center"
      className="Content"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col  span={12}>
          <ResultComponent />
        </Col>
        <Col span={12}>
          <NominationComponent />
        </Col>
      </Row>
    </Row>
);

export default MainView;
import React from 'react';
import {CSSTransition} from 'react-transition-group';

import {  Row, Col, Alert } from 'antd'
import Title from 'antd/lib/typography/Title';

import { NominationComponent, ResultComponent, SearchComponent } from './../components';

import './Main.css';

interface MainViewProps{
  showBanner: boolean
}

const MainView:React.FC<MainViewProps> =({showBanner}) => (
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

      {showBanner && ( 
       <CSSTransition 
          timeout={500}
          classNames="banner">
            <Row
            justify="center"
            className="Content"
            >
              <Col span={24}>
                <Alert  banner message="You have 5 and more nominations" type="warning"></Alert>
              </Col>
            </Row>
        </CSSTransition>
      )}
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
import React, { Component } from 'react';
import Slider from '../slider/Slider';
import styled from 'styled-components';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  `
  const SubTitle = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
`
const Text = styled.p`
  font-size: 18px;
  font-weight: 300;  
  color: white;
  margin-bottom: 30px;
`
const Apply = styled.button`
  font-size: 18px;
  padding: 20px 30px;
  font-weight: normal;
  border-radius: 40px;
  border: none;
  outline: none;
  background: orange;
  color: white;
`
class Content extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={6}>
          <Title>Качественный ремонт</Title>
          <SubTitle>iphone за 35 минут и гарантия 1 год</SubTitle>
          <Text>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло стоимостью 1000 рублей, с установкой в подарок!</Text>
          <Apply>Отправить заявку!</Apply>
        </Col>
        <Col lg={6}>
          <Slider />
        </Col>
      </Row>
    )
  }
}

export default Content;

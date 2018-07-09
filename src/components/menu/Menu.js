import React, { Component } from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Repair = styled.span`
  font-size: 18px;
`

const Spec = styled.span`
  font-size: 12px;
`

const Info = styled.span`
  font-size: 21px;
  font-weight: bold;
`
const Call = styled.button`
  color: white;
  border-radius: 30px;
  background-color: #3fc7db;
  padding: 15px 25px;
  border: none;
  font-size: 14px;
`

const num = '8(846) 922 55 44';
const attr = 'Ленинская, 301';

class Menu extends React.Component {
  render() {
    return (
      <Row className="menu-list">
        <Col lg={3}><Repair>Ремонт айфонов в сервисном центре и на выезде</Repair></Col>
        <Col lg={3} lgOffset={1}>
          <Spec>Пн-пт с 10 до 20, сб,вс с 11 до 18</Spec>
          <Info>{ attr }</Info>
        </Col>
        <Col lg={3}>
          <Spec>Звонки принимаются 24 часа</Spec>
          <Info>{ num }</Info>
        </Col>
        <Col lg={2}>
          <Call>Заказать звонок!</Call>
        </Col>
      </Row>
    )
  }
}

export default Menu;
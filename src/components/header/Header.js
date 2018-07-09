import React, { Component } from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const List = styled.ul`{
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  li:last-child a{
    border-right: none;
  }
}`

const Link = styled.a`{
  color: white;
  font-size: 14px;
  padding: 5px 25px;
  border-right: 1px dotted white;
  text-align: center;
  font-weight: 300;
  white-space: nowrap;
  &:hover {
    color: #717171;
  }
}`

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'Вызов мастера', link: '#' },
        { name: 'Прайс на ремонт', link: '#' },
        { name: 'Наши преимущества', link: '#' },
        { name: 'Схема работы', link: '#' },
        { name: 'Отзывы клиентов', link: '#' },
        { name: 'Примеры работ', link: '#' },
        { name: 'Контакты', link: '#' },
      ]
    };
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li key={index}><Link href={item.link}>{item.name}</Link></li>;
    });

    return (
      <Row>
        <Col>
          <List>
            {list}
          </List>
        </Col>
      </Row>
    )
  }
}


export default Header;


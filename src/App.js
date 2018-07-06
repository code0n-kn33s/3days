import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

// const Button = styled.button``;

class App extends Component {
  render() {
    return (
      <div className="wrapper" > 
        <SayName name="Name" surname="Surname" link="#"/>
        <SayName name="Tanya" surname="adf" link="https://google.com" />
        <SayName name="Peta" surname="FASD" link="https://google.com" />
      </div>
    );
  }
}
function SayName(props) {
  return (
    <div>
      <h1>My name: {props.name}</h1>
      <h2>My surname: {props.surname}</h2>
      <a href={props.link}>Link my profile</a>
    </div>
  )
}

export default App;

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';
import Bcg from './img/Фон.jpg';

const MainColor = '#505050';

const HeaderWrapper = styled.header`
  background: ${MainColor};
`

const MenuWrapper = styled.div``

const ContentWrapper = styled.div`
  background: url(${Bcg});
  height: 560px;
  display: flex;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <ContentWrapper>
          <Grid>
            <Content />
          </Grid>
        </ContentWrapper>
      </div>
    );
  }
}

export default App;

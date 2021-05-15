import React from 'react';
import MainContainer from 'layouts/MainContainer/MainContainer';
import { Card, Header, Title, SubTitle } from './Home.styles';

export default function Home() {
  return (
    <MainContainer>
      <Card>
        <Header>
          <Title>Nobel List</Title>
          <SubTitle>
            Nobel Prizes that have been awarded between 2015 and 2017
          </SubTitle>
        </Header>
      </Card>
    </MainContainer>
  );
}

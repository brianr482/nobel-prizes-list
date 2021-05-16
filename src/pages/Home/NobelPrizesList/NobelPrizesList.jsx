import React from 'react';
import { Container, Grid } from './NobelPrizesList.styles';
import NobelPrizeItem from './NobelPrizeItem';
import { NOBEL_PRIZES_LIST_MOCK } from './mock';

export default function NobelPrizesList() {
  return (
    <Container>
      <Grid>
        {NOBEL_PRIZES_LIST_MOCK.map((nobelPrize, idx) => (
          <NobelPrizeItem key={idx} item={nobelPrize} />
        ))}
      </Grid>
    </Container>
  );
}

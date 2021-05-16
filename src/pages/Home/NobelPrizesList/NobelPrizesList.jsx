import React, { useState } from 'react';
import { Container, Grid } from './NobelPrizesList.styles';
import NobelPrizeItem from './NobelPrizeItem';
import NobelPrizeModal from './NobelPrizeModal';
import { NOBEL_PRIZES_LIST_MOCK } from './mock';

export default function NobelPrizesList() {
  const [currentNobelPrize, setCurrentNobelPrize] = useState(null);

  /**
   * Set the given nobel as the current Nobel Prize when user click on it
   * @param {object} nobelPrize The Nobel Prize to set
   * @returns {void}
   */
  const onNobelPrizeItemClick = (nobelPrize) =>
    setCurrentNobelPrize(nobelPrize);

  /**
   * Hide the Nobel Prize modal
   */
  const onNobelModalCloseClick = () => setCurrentNobelPrize(null);

  return (
    <Container>
      <Grid>
        {NOBEL_PRIZES_LIST_MOCK.map((nobelPrize, idx) => (
          <NobelPrizeItem
            key={idx}
            item={nobelPrize}
            onItemClick={onNobelPrizeItemClick}
          />
        ))}
      </Grid>

      {currentNobelPrize && (
        <NobelPrizeModal
          nobelPrize={currentNobelPrize}
          onCloseClick={onNobelModalCloseClick}
        />
      )}
    </Container>
  );
}

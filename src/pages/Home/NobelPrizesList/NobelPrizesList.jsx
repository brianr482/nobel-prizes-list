import React, { useState } from 'react';
import { Container, Grid } from './NobelPrizesList.styles';
import NobelPrizeItem from './NobelPrizeItem';
import NobelPrizeModal from './NobelPrizeModal';
import ErrorState from 'components/ErrorState';
import Loader from 'components/Loader';
import { NOBEL_PRIZES_LIST_MOCK } from './mock';

export default function NobelPrizesList() {
  const [currentNobelPrize, setCurrentNobelPrize] = useState(null);
  const [isError] = useState(false);
  const [isLoading] = useState(false);

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
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorState />}
      {!isError && !isLoading && (
        <Grid>
          {NOBEL_PRIZES_LIST_MOCK.map((nobelPrize, idx) => (
            <NobelPrizeItem
              key={idx}
              item={nobelPrize}
              onItemClick={onNobelPrizeItemClick}
            />
          ))}
        </Grid>
      )}

      {currentNobelPrize && (
        <NobelPrizeModal
          nobelPrize={currentNobelPrize}
          onCloseClick={onNobelModalCloseClick}
        />
      )}
    </Container>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Category,
  ShowMoreButton,
  Description,
  LaureatesNumber,
  LaureatesLabel,
  LaureatesNames,
} from './NobelPrizeItem.styles';
import Chip from 'components/Chip';
import { getLaureatesNumber, getLaureatesNames } from 'utils';

function NobelPrizeItem({ item, onItemClick }) {
  return (
    <Container onClick={() => onItemClick(item)}>
      <Header>
        <Category>{item.category}</Category>
        <Chip>{item.year}</Chip>
      </Header>
      <Description data-testid={`${item.category}-${item.year}-description`}>
        <LaureatesNumber>
          {getLaureatesNumber(item.laureates.length)}
        </LaureatesNumber>
        <br />
        <LaureatesLabel>Laureates</LaureatesLabel>
        <LaureatesNames>{getLaureatesNames(item.laureates)}</LaureatesNames>
      </Description>
      <ShowMoreButton>Show more</ShowMoreButton>
    </Container>
  );
}

NobelPrizeItem.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string,
    year: PropTypes.string,
    laureates: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        firstname: PropTypes.string,
        surname: PropTypes.string,
        motivation: PropTypes.string,
        sahre: PropTypes.string,
      })
    ),
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default NobelPrizeItem;

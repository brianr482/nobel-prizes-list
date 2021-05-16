import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Category,
  Year,
  ShowMoreButton,
  Description,
  LaureatesNumber,
  LaureatesLabel,
  LaureatesNames,
} from './NobelPrizeItem.styles';

function NobelPrizeItem({ item: { category, year, laureates } }) {
  /**
   * Generate label to indicate the total number of laureates
   * @param {number} lauratesTotal Total of laureates for the current Nobel
   * @returns {string} Formatted label indicating the number of laureates
   */
  const getLauratesNumber = (lauratesTotal) => {
    return `${lauratesTotal} ${
      lauratesTotal > 1 ? ' laureates' : 'laureate'
    } for this Nobel`;
  };

  /**
   * Concat all the laureates names into single string separated by commas
   * @param {object[]} laurates List of laureates for the current Nobel
   * @returns {string} Formatted label indicating the names of laureates
   */
  const getLaureatesNames = (laurates) => {
    let lauratesNames = '';
    const lauratesTotal = laurates.length;
    laurates.forEach((laurate, idx) => {
      let fullName = laurate.firstname;
      if (laurate.surname) {
        fullName += ` ${laurate.surname}`;
      }
      const comma = idx === lauratesTotal - 1 ? '' : ', ';
      lauratesNames += `${fullName}${comma}`;
    });

    return lauratesNames;
  };

  return (
    <Container>
      <Header>
        <Category>{category}</Category>
        <Year>{year}</Year>
      </Header>
      <Description>
        <LaureatesNumber>{getLauratesNumber(laureates.length)}</LaureatesNumber>
        <br />
        <LaureatesLabel>Laureates</LaureatesLabel>
        <LaureatesNames>{getLaureatesNames(laureates)}</LaureatesNames>
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
};

export default NobelPrizeItem;

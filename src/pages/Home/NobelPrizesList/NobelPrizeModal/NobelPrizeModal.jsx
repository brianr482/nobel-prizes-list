import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import {
  Header,
  LaureatesLabel,
  LaureatesList,
  Laureate,
  LaureateAuthors,
  LaureateMotivation,
} from './NobelPrizeModal.styles';
import { LaureatesNumber } from '../NobelPrizeItem/NobelPrizeItem.styles';
import {
  getLaureateFullName,
  getLaureatesNumber,
  getLaureatesNames,
  upperFirst,
} from 'utils';

function NobelPrizeModal({
  nobelPrize: { category, year, laureates },
  onCloseClick,
}) {
  /**
   * Get the title of the modal based on the given category and year
   * @param {string} category The category of the current Nobel Prize
   * @param {string} year The year of the current Nobel Prize
   * @returns {string} Title for the current Nobel Prize modal
   */
  const getTitle = (category, year) => `${category} (${year})`;

  /**
   * Group the laureates of the current Nobel Prize by their motivations
   * @param {object[]} laureates List of laureates of the current Nobel Prize
   * @returns {object[]} List of laureates grouped by motivation
   */
  const groupLaureatesByMotivation = (laureates) => {
    const laureatesMotivationHash = new Map();

    laureates.forEach((laureate) => {
      const formattedLaureate = laureatesMotivationHash.get(
        laureate.motivation
      ) || { authors: [], motivation: laureate.motivation };
      const fullName = getLaureateFullName(laureate);

      formattedLaureate.authors.push(fullName);

      if (!laureatesMotivationHash.has(laureate.motivation)) {
        laureatesMotivationHash.set(laureate.motivation, formattedLaureate);
      }
    });

    return [...laureatesMotivationHash.values()];
  };

  return (
    <Modal onCloseClick={onCloseClick}>
      <Header>{getTitle(category, year)}</Header>
      <LaureatesNumber data-testid="modal-laureates-number">
        {getLaureatesNumber(laureates.length)}
      </LaureatesNumber>
      <LaureatesLabel>Laureates authors and motivations</LaureatesLabel>
      <LaureatesList data-testid="modal-laureates-list">
        {groupLaureatesByMotivation(laureates).map((laureateGroup, idx) => (
          <Laureate key={idx}>
            <LaureateAuthors>
              {getLaureatesNames(laureateGroup.authors, true)}
            </LaureateAuthors>
            <LaureateMotivation>
              {upperFirst(laureateGroup.motivation.replace(/"/g, ''))}
            </LaureateMotivation>
          </Laureate>
        ))}
      </LaureatesList>
    </Modal>
  );
}

NobelPrizeModal.propTypes = {
  nobelPrize: PropTypes.shape({
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
  onCloseClick: PropTypes.func,
};

export default NobelPrizeModal;

import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './Chip.styles';

export function Chip({ children }) {
  return <Container>{children}</Container>;
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Chip;

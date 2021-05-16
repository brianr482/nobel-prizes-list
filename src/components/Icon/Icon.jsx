import PropTypes from 'prop-types';
import React from 'react';

export function Icon({ name }) {
  /**
   * Generate the GG css classname for the given icon name
   * @param {strin} iconName Name of the icon
   * @returns CSS classname for the given icon based on the GG css syntax
   */
  const getCssClassName = (iconName) => {
    return `gg-${iconName.toLowerCase()}`;
  };

  return <i className={getCssClassName(name)}></i>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

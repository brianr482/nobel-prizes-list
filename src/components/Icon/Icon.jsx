import PropTypes from 'prop-types';
import React from 'react';

export function Icon({ name, className }) {
  /**
   * Generate the GG css classname for the given icon name
   * @param {string} iconName Name of the icon
   * @returns CSS classname for the given icon based on the GG css syntax
   */
  const getCssClassName = (iconName) => {
    let finalClassName = `gg-${iconName.toLowerCase()}`;
    if (className) {
      finalClassName += ` ${className}`;
    }

    return finalClassName;
  };

  return <i className={getCssClassName(name)}></i>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;

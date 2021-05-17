import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { COLORS } from 'styles/utils/constants';

const getPropsByVariant = (variant) => {
  const iconVariantProps = {
    main: {
      padding: '0.3rem',
      backgroundColor: 'transparent',
      color: COLORS.secondaryTextColor,
    },
    hover: { backgroundColor: '#c5c5c54d' },
  };

  const solidVariantProps = {
    main: {
      backgroundColor: COLORS.primaryColor,
      color: COLORS.primaryTextColor,
    },
    hover: { backgroundColor: '#72affa' },
  };

  const variants = {
    icon: iconVariantProps,
    solid: solidVariantProps,
  };

  return variants[variant] || variants.solid;
};

const StyledButton = ({ variant, disabled }) => {
  const propsByVariant = getPropsByVariant(variant);

  return {
    border: 0,
    borderRadius: '1.7rem',
    margin: 0,
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '1rem 3rem',
    transition: 'background-color 0.5s ease',
    ...(propsByVariant && propsByVariant.main),
    '&:hover': !disabled && {
      ...(propsByVariant && propsByVariant.hover),
    },
  };
};

const buttonConfig = {
  shouldForwardProp: (prop) => isPropValid(prop),
};

export default styled('button', buttonConfig)(StyledButton);

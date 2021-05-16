import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line no-unused-vars
// import { CSS } from 'css.gg';
import { Overlay, Container, ClearButton } from './Modal.styles';

export function Modal({ children }) {
  return (
    <Overlay>
      <Container>
        {children}
        <ClearButton variant="icon">
          <i className="gg-close"></i>
        </ClearButton>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

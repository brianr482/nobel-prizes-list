import PropTypes from 'prop-types';
import React from 'react';
import { Overlay, Container, ClearButton } from './Modal.styles';
import Icon from 'components/Icon';

export function Modal({ children, onCloseClick }) {
  /**
   * Stop propagation when user clicks on the modal container
   * @param {MouseEvent} e HTML click event
   * @returns {void}
   */
  const onContainerClick = (e) => e.stopPropagation();
  return (
    <Overlay onClick={onCloseClick}>
      <Container onClick={onContainerClick}>
        {children}
        <ClearButton
          data-testid="modal-clear-btn"
          variant="icon"
          onClick={onCloseClick}
        >
          <Icon name="close" />
        </ClearButton>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func,
};

export default Modal;

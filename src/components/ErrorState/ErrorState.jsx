import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Title,
  Message,
  RetryButton,
  ErrorIcon,
} from './ErrorState.styles';

export function ErrorState({ onRetryClick }) {
  return (
    <Container>
      <ErrorIcon name="smile-sad" />
      <Title>Something went wrong...</Title>
      <Message>
        We are working on fixing the problem.
        <br />
        Please try again.
      </Message>
      {onRetryClick && (
        <RetryButton onClick={onRetryClick}>Try again</RetryButton>
      )}
    </Container>
  );
}

ErrorState.propTypes = {
  onRetryClick: PropTypes.func,
};

export default ErrorState;

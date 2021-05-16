import React from 'react';
import { Container, LoaderIcon } from './Loader.styles';

export default function ErrorState() {
  return (
    <Container>
      <LoaderIcon name="spinner-two" />
    </Container>
  );
}

import styled from '@emotion/styled';
import Button from 'components/Button/Button.styles';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 65rem;
  max-height: 30rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ClearButton = styled(Button)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

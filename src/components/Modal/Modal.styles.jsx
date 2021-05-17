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
  padding: 1.5rem;
  opacity: 1;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ClearButton = styled(Button)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

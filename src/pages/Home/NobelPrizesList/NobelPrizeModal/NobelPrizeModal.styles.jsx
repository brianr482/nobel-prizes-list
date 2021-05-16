import styled from '@emotion/styled';
import { FONT_SIZES, COLORS } from 'styles/utils/constants';

export const Container = styled.div`
  width: 100%;
  max-width: 65rem;
  max-height: 30rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 0;
  font-size: ${FONT_SIZES.xl};
  text-transform: capitalize;
  font-weight: bold;
  color: ${COLORS.primaryTextColor};
`;

export const LaureatesLabel = styled.h3`
  color: ${COLORS.primaryTextColor};
  font-size: ${FONT_SIZES.md};
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const Laureate = styled.div`
  word-break: break-word;
  font-size: ${FONT_SIZES.md};
`;

export const LaureatesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  column-gap: 2rem;
  row-gap: 1.2rem;
`;

export const LaureateAuthors = styled.div`
  color: ${COLORS.primaryTextColor};
`;

export const LaureateMotivation = styled.div`
  color: ${COLORS.secondaryTextColor};
  text-align: justify;
  margin-top: 0.1rem;
`;

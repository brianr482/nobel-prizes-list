import styled from '@emotion/styled';
import { COLORS } from 'styles/utils/constants';

export const Container = styled.div`
  padding: 0.3rem 0.9rem;
  background-color: ${COLORS.accentColor};
  color: ${COLORS.primaryTextColor};
  font-weight: bold;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from '@emotion/styled';
import Icon from 'components/Icon';
import { COLORS } from 'styles/utils/constants';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoaderIcon = styled(Icon)`
  color: ${COLORS.primaryTextColor};
`;

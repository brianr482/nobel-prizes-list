import styled from '@emotion/styled';
import Button from 'components/Button/Button.styles';
import Icon from 'components/Icon';
import { FONT_SIZES, COLORS } from 'styles/utils/constants';

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${COLORS.primaryTextColor};
  margin: 0;
  margin-top: 1rem;
  font-size: ${FONT_SIZES.xl};
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: ${FONT_SIZES.md};
  color: ${COLORS.secondaryTextColor};
`;

export const RetryButton = styled(Button)`
  margin-top: 1rem;
`;

export const ErrorIcon = styled(Icon)`
  color: ${COLORS.primaryTextColor};
`;

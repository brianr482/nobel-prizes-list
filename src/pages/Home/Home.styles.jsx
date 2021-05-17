import styled from '@emotion/styled';
import { FONT_SIZES, COLORS } from 'styles/utils/constants';

export const Card = styled.div`
  max-width: 60rem;
  max-height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid ${COLORS.dividerColor};
  padding-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-size: ${FONT_SIZES.xl2};
  margin: 0;
`;

export const SubTitle = styled.span`
  margin-top: 0.3rem;
  font-size: ${FONT_SIZES.md};
`;

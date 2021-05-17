import styled from '@emotion/styled';
import { FONT_SIZES, COLORS } from 'styles/utils/constants';
import Button from 'components/Button/Button.styles';

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  border-radius: 0.8rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  transition: top ease 0.3s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      top: -0.5rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.h1`
  margin: 0;
  font-size: ${FONT_SIZES.lg};
  text-transform: capitalize;
`;

export const Description = styled.div`
  height: calc(100% - 5.3rem);
  width: 100%;
  margin: 0;
`;

export const LaureatesNumber = styled.div`
  color: ${COLORS.secondaryTextColor};
  font-size: ${FONT_SIZES.md};
  margin-top: 0.2rem;
`;

export const LaureatesLabel = styled.h3`
  color: ${COLORS.primaryTextColor};
  font-size: ${FONT_SIZES.md};
  margin: 0;
`;

export const LaureatesNames = styled.p`
  color: ${COLORS.primaryTextColor};
  font-size: ${FONT_SIZES.md};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShowMoreButton = styled(Button)`
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
`;

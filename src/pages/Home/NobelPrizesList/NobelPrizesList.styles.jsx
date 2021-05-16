import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: Auto;
  margin-top: 1.5rem;
  padding: 0 1rem;
`;

export const Grid = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;
`;

import styled from '@emotion/styled';
export const List = styled.ul`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

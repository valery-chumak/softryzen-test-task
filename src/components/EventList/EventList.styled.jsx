import styled from '@emotion/styled';
export const List = styled.ul`
  display: grid;
  width:272px;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))
  grid-gap: 12px;

  @media (min-width: 768px) {
    width:inherit;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

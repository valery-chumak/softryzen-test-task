import styled from '@emotion/styled';
export const Section = styled.section`
  padding: 0 80px;
`;
export const List = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(302px, 1fr));
  grid-gap: 24px;
`;

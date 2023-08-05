import styled from '@emotion/styled';

export const Section = styled.section`
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid rgba(123, 97, 255, 1);
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 320px;
  height: 168px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    height: 92px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
    height: 92px;
  }
`;
export const Logo = styled.span`
  display: block;
  width: 147px;
  height: 33px;

  margin-right: 56px;

  color: #7b61ff;
  font-family: Alata;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    margin-right: auto;
  }
`;
export const Search = styled.form`
  position: relative;
  display: block;
  height: 48px;
  margin: 0;
  order: 2;

  @media (min-width: 768px) {
    order: 1;
    margin-right: 24px;
  }

  @media (min-width: 1280px) {
    order: 1;
    margin-right: 24px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SearchBar = styled.input`
  display: flex;
  width: 272px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 12px;
  padding-left: 48px;
  border-radius: 8px;
  border: none;

  color: #888;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 14px */

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 368px;
  }

  @media (min-width: 1280px) {
    width: 410px;
  }
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 12px;
  display: block;
  width: 24px;
  height: 24px;

  color: #7b61ff;
`;
export const Language = styled.div`
  display: flex;
  width: 69px;
  height: 48px;
  padding: 12px 4px 12px 12px;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  color: rgba(63, 63, 63, 1);
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }

  @media (min-width: 1280px) {
    order: 2;
  }
`;
export const IconDown = styled.span`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

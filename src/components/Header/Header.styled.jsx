import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  align-items: center;
  height: 92px;

  border: 0px 0px 1px 0px;
  border-bottom: 1px solid rgba(123, 97, 255, 1);
`;
export const Logo = styled.span`
  display: block;
  width: 147px;
  height: 33px;

  margin-left: 80px;
  margin-right: 630px;

  color: #7b61ff;
  font-family: Alata;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Search = styled.form`
  position: relative;
  display: block;
  height: 48px;
  margin-right: 24px;
`;
export const SearchBar = styled.input`
  display: flex;
  width: 410px;
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
`;
export const Icon = styled.span`
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
`;
export const IconDown = styled.span`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

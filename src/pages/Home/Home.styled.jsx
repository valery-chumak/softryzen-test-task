import styled from '@emotion/styled';
import background from '../../images/background.png';
import { Link } from 'react-router-dom';
export const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;

  background-image: url('${background}');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  padding-top: 60px;

  width: -webkit-fill-available;
  height: calc(100% - 168px);

  @media (min-width: 768px) {
    height: calc(100% - 92px);
  }
`;
export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 24px;
  height: -webkit-fill-available;
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
export const Title = styled.h1`
  display: none;
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 768px) {
    display: block;
    order: 2;
  }
  @media (min-width: 1280px) {
    order: 1;
  }
`;
export const FilterBlock = styled.div`
  display: flex;
  padding-bottom: 40px;

  width: inherit;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;

  @media (min-width: 768px) {
    order: 1;
  }
  @media (min-width: 1280px) {
    order: 2;
  }
`;
export const ButtonName = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1280px) {
    display: block;
  }
`;
export const CategoryButton = styled.button`
  display: inline-flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: #fff;
  margin-right: 24px;
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 143px;
  }
  @media (min-width: 1280px) {
    width: 148px;
  }
`;
export const SortButton = styled.button`
  display: inline-flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: #fff;
  margin-right: 24px;
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 129px;
  }
`;
export const AddButton = styled.button`
  width: 56px;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  background: #7b61ff;

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 193px;
    padding: 16px 12px;
  }
`;
export const StyledLink = styled(Link)``;
export const IconFilter = styled.span`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 16px;
  }
`;
export const IconSlider = styled.span`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 16px;
  }
`;
export const IconAdd = styled.span`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 768px) {
    margin-right: 16px;
  }
`;
export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover #content {
    display: block;
  }
`;
export const Content = styled.ul`
  display: none;
  width: 158px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &#option:hover {
    background-color: #ddd;
  }
`;
export const Option = styled.button`
  width: -webkit-fill-available;
  text-align: left;
  padding-left: 30px;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid var(--divider, #aca7c3);
  background: #fff;
`;

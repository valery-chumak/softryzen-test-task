import styled from '@emotion/styled';
import background from '../../images/background.png';
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
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #7b61ff;
  color: rgba(255, 255, 255, 1);
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 193px;
    padding: 16px 12px;
  }
`;

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

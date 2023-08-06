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
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 24px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-top: 0px;
    margin-bottom: 14px;
  }
  @media (min-width: 1280px) {
    margin-left: 310px;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  color: var(--accent, #7b61ff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  color: var(--accent, #7b61ff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 8px;
`;
export const Item = styled.div`
  position: relative;

  justify-content: center;
  background-color: white;
  width: 272px;
  height: 464px;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 100%;
    height: 504px;
  }
  @media (min-width: 1280px) {
    width: 628px;
    height: 492px;
  }
`;
export const Image = styled.img`
  display: block;
  width: inherit;
  height: 168px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 272px;
  }
`;
export const Description = styled.p`
  padding: 20px 16px 12px 10px;
  height: 72px;
  align-self: stretch;
  color: var(--m-3-sys-light-on-surface-variant, #49454f);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  background-color: white;
`;
export const Category = styled.div`
  z-index: 5;
  height: 32px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #fff;
  margin-right: 12px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(123, 97, 255, 1);
`;
export const ListInfo = styled.ul`
  display: flex;
  margin-left: 9px;
  padding-top: 24px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding-top: 0px;
  }
`;
export const Info = styled.li`
  z-index: 5;
  height: 32px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #fff;
  margin-right: 12px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(123, 97, 255, 1);

  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 40px 16px;
  justify-content: flex-end;

  @media (min-width: 768px) {
    padding: 24px 40px 40px 0px;
  }
`;
export const ButtonEdit = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: #7b61ff;
  width: 108px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--accent, #7b61ff);
`;
export const ButtonDelete = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: white;
  width: 108px;
  height: 32px;
  border-radius: 4px;
  background: var(--accent, #7b61ff);
`;

import styled from '@emotion/styled';
import background from '../../images/background.png';
import { Link } from 'react-router-dom';
import Select from 'react-select';
export const StyledSelect = styled(Select)`
  margin-top: 5px;
  & > div {
    display: flex;
    width: 240px;
    padding: 0px 12px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--divider, #aca7c3);
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 308px;

      margin-bottom: 0px;
    }
    @media (min-width: 1280px) {
      width: 372px;
      margin-bottom: 0px;
    }
  }
`;
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
  padding-bottom: 40px;
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
  margin-top: 26px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-top: 26px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
    margin-top: 19px;
    margin-bottom: 25px;
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
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  width: 272px;
  height: 1000px;
  border-radius: 8px;
  background: #fff;

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    display: block;
    display: grid;
    width: 688px;
    height: 656px;
    padding: 40px 24px;
    grid-template-rows: repeat(6, 100px);
    grid-template-columns: 308px 308px;
    column-gap: 24px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    height: 490px;
    padding: 40px 40px 54px 40px;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;
export const Label = styled.label`
  color: #7b61ff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: 0.4px;

  &#description input {
    height: 156px;
  }

  @media only screen and (max-width: 1279px) and (min-width: 768px) {
    &#description {
      grid-row-start: 2;
      grid-row-end: 4;
    }
    &#description input {
      height: 156px;
    }
    &#picture {
      grid-column-start: 2;
      grid-row-start: 3;
    }
    &#priority {
      grid-column-start: 2;
      grid-row-start: 4;
    }
    &#location {
      grid-column-start: 2;
      grid-row-start: 1;
    }
    &#category {
      grid-column-start: 2;
      grid-row-start: 2;
    }
  }

  @media (min-width: 1280px) {
    &#time {
      grid-column-start: 2;
      grid-row-start: 2;
    }
    &#location {
      grid-column-start: 2;
      grid-row-start: 3;
    }
  }

  @media (min-width: 1280px) {
    &#description {
      grid-column-start: 1;
      grid-row-start: 2;
      grid-row-end: 4;
    }
  }

  &#picture {
    color: #aca7c3;
  }
`;
export const Input = styled.input`
  display: flex;
  width: 240px;
  padding: 16px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--divider, #aca7c3);
  margin-bottom: 20px;
  margin-top: 5px;

  &:disabled {
    color: #aca7c3;
  }

  @media (min-width: 768px) {
    width: 308px;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
    width: 372px;
    margin-bottom: 0px;
  }
`;
export const Button = styled.button`
  display: flex;
  width: 240px;
  height: 56px;
  padding: 16px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #7b61ff;
  color: white;
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  margin-top: auto;

  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-row-start: 6;
    width: 193px;
    margin-left: auto;
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    grid-column-start: 3;
    grid-row-start: 4;

    margin-left: auto;
    margin-right: 24px;
  }
`;

import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 272px;
  height: 480px;
  flex-direction: column;

  border-radius: 12px;
  margin-bottom: 28px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: 768px) {
    width: 302px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:hover #button-container,
  &:focus #button-container {
    display: flex;
    justify-content: flex-end;
  }
`;
export const ButtonWrapper = styled.div`
  display: none;
  height: 64px;
  padding: 8px 16px 16px 16px;

  width: 270px;
  height: 40px;
  padding: 8px 16px 16px 16px;
`;

export const Button = styled.button`
  display: none;
  width: 66px;
  height: 20px;
  padding: 10px 24px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #7b61ff;

  color: var(--m-3-sys-light-on-primary, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
export const Image = styled.img`
  display: block;
  width: 272px;
  height: 360px;
  z-index: 3;
  @media (min-width: 768px) {
    width: 302px;
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  height: 32px;
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
export const Priority = styled.div`
  z-index: 5;
  height: 32px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #fff;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;
export const Title = styled.h2`
  color: var(--m-3-sys-light-on-surface, #1c1b1f);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  display: flex;
  padding: 16px 16px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const TimeInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 272px;
  padding: 8px 16px;
  color: var(--accent, #7b61ff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  background: rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    width: 302px;
  }
`;
export const Time = styled.span``;
export const Place = styled.span`
  display: block;
  margin-left: auto;
  margin-right: 0;
`;
export const Description = styled.p`
  padding: 8px 16px 16px 16px;
  height: 72px;
  align-self: stretch;
  color: var(--m-3-sys-light-on-surface-variant, #49454f);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  background: #fff;
`;

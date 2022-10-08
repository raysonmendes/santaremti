import styled from "styled-components";

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* overflow: hidden; */
`;

export const Sct_Title = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 26px;
`;

export const Title1 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  color: #212121;

  font-family: "Montserrat", sans-serif;
`;

export const Sct_Intro = styled.div`
  display: flex;
  flex-direction: row;
  //top: 0;

  /* margin: auto; */
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  /* height: auto; */

  flex-wrap: wrap;
`;

// export const Title2 = styled.h2`
//   padding-left: 10px;
//   font-size: 48px;
//   color: #223459;
// `;

export const Sct_SubIntro1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-top: 90px;
  height: 100%;

  @media (max-width: 1030px) {
    height: auto;
  }
`;

export const TextP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.75rem;
  color: #212121;
  padding-bottom: 97px;
  //width: 95%;
  width: 481px;
  height: 132px;
`;

export const Sct_Button = styled.ul`
  display: flex;
  flex-direction: row;
  height: 64px;
  border: none;
  background: none;
  margin-top: 65px;
  width: 100%;

  gap: 22px;
`;

export const BT1 = styled.button`
  position: relative;
  /* width: 45%; */
  width: 15.3125rem;
  height: 64px;
  background: #fafafa;
  border: 1px solid #262626;
  box-shadow: 3px 4px 10px rgba(38, 38, 38, 0.25);
  border-radius: 8px;
  left: 0;
  margin: auto;

  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BT2 = styled.button`
  position: relative;
  width: 15.3125rem;
  height: 64px;
  right: 0;
  color: #fafafa;
  background: #262626;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
  border: none;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const Sct_Image = styled.div`
  /* position: relative; */
  //top: 94px;
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
`;

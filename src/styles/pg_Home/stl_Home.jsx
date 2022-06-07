import styled from "styled-components";

export const Section1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 698px;
  margin: auto;
`;

export const Sct_Title = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 26px;
`;

export const Title1 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #212121;
`;

export const Sct_Intro = styled.div`
  display: flex;
  flex-direction: row;
  //top: 0;
  position: relative;
  margin: auto;
  width: 100%;
  height: auto;
`;

// export const Title2 = styled.h2`
//   padding-left: 10px;
//   font-size: 48px;
//   color: #223459;
// `;

export const Sct_SubIntro1 = styled.article`
  display: flex;
  position: relative;
  left: 0;
  width: 50%;
  flex-direction: column;
  //top: 25%;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const TextP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #212121;
  //width: 95%;
  width: 481px;
  height: 132px;
`;

export const Sct_Button = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 64px;
  border: none;
  background: none;
  margin-top: 65px;
  width: 100%;
`;

export const BT1 = styled.button`
  position: relative;
  width: 45%;
  height: 64px;
  background: #fafafa;
  border: 1px solid #262626;
  box-shadow: 3px 4px 10px rgba(38, 38, 38, 0.25);
  border-radius: 8px;
  left: 0;
  margin: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const BT2 = styled.button`
  position: relative;
  width: 45%;
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
  position: relative;
  //top: 94px;
  width: 50%;
  height: 586px;
`;

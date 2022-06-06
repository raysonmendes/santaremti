import styled from "styled-components";

export const Sct_Contents = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  top: 60px;
  left: 360px;
  right: 360px;
`;

export const Sct_Intro = styled.div`
  top: 99px;
  position: absolute;
`;

export const Sct_Title = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0;
  padding: 0;
`;

export const Title1 = styled.h2`
  font-size: 48px;
  color: #212121;
`;

export const Title2 = styled.h2`
  padding-left: 10px;
  font-size: 48px;
  color: #223459;
`;

export const Sct_SubIntro1 = styled.article`
  display: flex;
  position: absolute;
  left: 0;
  width: 512px;
  flex-direction: column;
  top: 94px;
  height: 246px;
`;

export const TextP = styled.p`
  font-size: 32px;
  color: #212121;
  width: 481px;
  height: 117px;
`;

export const Sct_Button = styled.ul`
  height: 64px;
  border: none;
  background: none;
  margin-top: 65px;
`;

export const BT1 = styled.button`
  width: 245px;
  height: 64px;
  background: #fafafa;
  border: 1px solid #353d9f;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
`;

export const BT2 = styled.button`
  width: 245px;
  height: 64px;
  right: 0;
  position: absolute;
  background: #353d9f;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
`;

export const Sct_Image = styled.div`
  position: absolute;
  top: 94px;
  width: 633px;
  height: 586px;
  margin-left: 566px;
`;

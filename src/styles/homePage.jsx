import styled from "styled-components";

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 6.4rem;
  color: #000000;
  font-family: "Barlow", sans-serif;
`;

export const Sct_Intro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120rem;
  flex-wrap: wrap;
`;

export const Sct_SubIntro1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 51.2rem;
`;

export const TextP = styled.p`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 2.75rem;
  color: #000000;
  width: 48.1rem;
  height: 13.2rem;
`;

/* Seção de Botões */
export const Sct_Button = styled.div`
  display: flex;
  height: 6.4rem;
  border: none;
  background: none;
  margin-top: 9rem;
  width: 51.2rem;
  gap: 2.2rem;
`;

export const BT1 = styled.button`
  width: 24.5rem;
  height: 6.4rem;

  background: #fafafa;
  border: 1px solid #000000;
  box-shadow: 3px 4px 10px rgba(38, 38, 38, 0.25);
  border-radius: 8px;

  /* Fonte */
  font-size: 2rem;
  line-height: 2.4rem;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;

export const BT2 = styled.button`
  width: 24.5rem;
  height: 6.4rem;

  background: #000000;
  box-shadow: 3px 4px 10px rgba(38, 38, 38, 0.25);
  border-radius: 8px;

  /* Fonte */
  font-size: 2rem;
  line-height: 2.4rem;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fafafa;

  &:hover {
    cursor: pointer;
  }
`;

export const Sct_Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 67.9rem;
  height: 67.9rem;
`;

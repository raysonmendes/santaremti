import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: min(1200px, 90%);

  justify-content: center;
  justify-self: center;

  gap: 1rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 50%;
`;

/**Estilização dos filhos da Section Service */

export const LegendService = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem 0rem;

  gap: 1rem;

  width: 58rem;
  height: 8rem;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 120%;
`;

export const TitleService = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const SubTitleService = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

export const DescriptionService = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
`;

/**Estilização dos filhos da Section Offer */

export const LegendOffer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  gap: 1rem;

  width: 58rem;
  height: 8rem;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
`;

export const SubTitleOffer = styled.div``;

export const DescrioptionOffer = styled.div``;

export const InputValueOffer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonSendOffer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

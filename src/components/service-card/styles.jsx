import styled from "styled-components";
export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;

  width: 30rem;
  height: 45rem;
  /* padding: 1.5rem; */

  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.262);

  font-family: "Manrope", sans-serif;
  font-size: large;
`;

export const Identification = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  width: 100%;
  height: 15rem;

  border-bottom: 1px solid #000000;

  * {
    font-family: "Manrope", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
  }
`;

export const RequesterName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.5rem; */

  width: 100%;

  font-family: "Manrope", sans-serif;
  font-weight: 700;
`;

export const Title = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 2rem;
  font-weight: 700;

  max-width: 100%;

  text-overflow: ellipsis; /* enables ellipsis */
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
`;

export const ServiceTitleArea = styled.div``;

export const Description = styled.div`
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;

  overflow: hidden;
  height: 25rem;
`;

export const DescriptionTitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;

  border-top: 1px solid #000000;
`;

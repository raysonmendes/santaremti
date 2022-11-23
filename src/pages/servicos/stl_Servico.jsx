import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (min-width: 577px) {
    width: 1200px;
  }
  @media (max-width: 576px) {
    width: 576px;
  }
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  gap: 1rem;
`;

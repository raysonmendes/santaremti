import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 577px) {
    width: 1200px;
    //background-color: blue;
  }
  @media (max-width: 576px) {
    width: 576px;
    //background-color: red;
  }
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  //position: fixed;
  justify-content: center;
  width: 100vw;

  height: 3.25rem;
  background: #fafafa;
  box-shadow: 0px 2px 10px rgba(34, 52, 89, 0.22);
`;

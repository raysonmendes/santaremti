import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1030px;
  margin: 8px auto 8px auto;
`;

export const SubmitBtn = styled.button`
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

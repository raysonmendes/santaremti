import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const No_Logged = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const Bt_LogIn = styled.div`
  cursor: pointer;
  padding: 5px;
  filter: drop-shadow(3px 4px 10px rgba(34, 24, 116, 0.25));
  border-radius: 5px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.78rem;
  line-height: 1.8rem;
  text-align: center;
  color: #262626;
`;

export const Bt_SingIn = styled.div`
  cursor: pointer;
  padding: 5px;

  background: #262626;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 5px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.78rem;
  line-height: 1.8rem;
  text-align: center;
  color: #ffffff;
`;

export const Logged = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const User_Image = styled.div``;

export const User_Name = styled.p``;

export const Bt_Menu = styled.div`
  cursor: pointer;
`;

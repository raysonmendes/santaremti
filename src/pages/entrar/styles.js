import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 700px;
  height: 500px;
  backdrop-filter: blur "4px";
  border: 1px solid #262626;
`;

export const Sct_Logo = styled.div`
  display: flex;
  width: 100vw;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #000000;
`;

export const Sct_Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 4.9rem;
  color: #262626;
`;

export const Sct_SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;

  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #000000;
`;
export const Sct_Email = styled.input``;

export const Sct_Passworld = styled.input``;

export const Sct_RememberForget = styled.div``;

export const Sct_Remember = styled.label``;

export const Checkbox = styled.input``;

export const Sct_Forget = styled.a``;

export const Btn_Login = styled.button``;

export const Btn_Google = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 2rem 3.2rem;
  gap: 1rem;

  width: 33.9rem;
  height: 4.2rem;

  background: #000000;
  box-shadow: 0px 4px 10px rgba(60, 166, 166, 0.25);
  border-radius: 20px;

  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #ffffff;

  cursor: pointer;
`;

export const Stc_SingIn = styled.a``;

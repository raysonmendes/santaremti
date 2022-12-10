import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 700px;
  height: 500px;
  backdrop-filter: blur "4px";
  border: 1px solid #262626;
`;

export const Sct_Logo = styled.div`
  display: flex;
  width: 8rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const Sct_Title = styled.div`
  display: flex;
  font-family: "Manrope";
  font-size: 2.25rem;
  justify-content: center;
  align-items: center;
`;

export const Sct_SubTitle = styled.div`
  display: flex;
  font-family: "Manrope";
  font-size: 1rem;
  justify-content: center;
  align-items: center;
`;
export const Sct_Email = styled.input``;

export const Sct_Passworld = styled.input``;

export const Sct_RememberForget = styled.div``;

export const Sct_Remember = styled.label``;

export const Checkbox = styled.input``;

export const Sct_Forget = styled.a``;

export const Btn_Login = styled.button``;

export const Btn_Google = styled.button`
  background-color: #262626;
  width: 21rem;
  height: 3.375rem;
  border: 1px solid inherit;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;

  cursor: pointer;
`;

export const Stc_SingIn = styled.a``;

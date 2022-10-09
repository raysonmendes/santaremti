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
`;

export const User_Image = styled.div``;

export const User_Name = styled.div`
  padding-left: 5px;
`;

export const Bt_Menu = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
  transition: all ease 0.2s;

  :hover {
    background-color: #eee;
  }
`;

export const Dropdown_Menu = styled.div`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  top: 25px;
  transform-origin: 126px -8px;

  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  position: absolute;
  overflow: hidden auto;
  min-width: 100px;
  min-height: 16px;

  outline: 0px;

  ul {
    list-style: none;
    margin: 0px;
    padding: 8px 0px;
    outline: 0px;

    li {
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      outline: 0px;
      border: 0px;
      margin: 0px px;
      border-radius: 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;

      appearance: none;
      color: inherit;
      line-height: 1.5;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      min-height: 48px;
      padding: 6px 16px;
      box-sizing: border-box;
      white-space: nowrap;

      transition: all ease 0.2;

      :hover {
        background-color: #f5f5f5;
      }
    }
  }

  /* border-radius: 4px;
  background-color: rgb(255, 255, 255);

  ul {
    list-style: none;
  }

  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px; */
`;

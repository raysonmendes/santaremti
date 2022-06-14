import {
  Container,
  No_Logged,
  Bt_LogIn,
  Bt_SingIn,
  Logged,
  User_Image,
  User_Name,
  Bt_Menu,
} from "./styles";

const UserHeader = () => (
  <Container>
    <No_Logged>
      <Bt_LogIn>Entrar</Bt_LogIn>
      <Bt_SingIn>Cadastrar</Bt_SingIn>
    </No_Logged>
    <Logged>
      <User_Image></User_Image>
      <User_Name></User_Name>
      <Bt_Menu></Bt_Menu>
    </Logged>
  </Container>
);
export default UserHeader;

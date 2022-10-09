import CustomizedLink from "../customizedLink";

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

const UserHeader = () => {
  return (
    <Container>
      <No_Logged>
        <CustomizedLink link="/entrar">
          <Bt_LogIn>Entrar</Bt_LogIn>
        </CustomizedLink>

        <CustomizedLink link={"/cadastrar"}>
          <Bt_SingIn>Cadastrar</Bt_SingIn>
        </CustomizedLink>
      </No_Logged>
      <Logged>
        <User_Image></User_Image>
        <User_Name></User_Name>
        <Bt_Menu></Bt_Menu>
      </Logged>
    </Container>
  );
};

export default UserHeader;

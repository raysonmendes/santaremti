import CustomizedLink from "../customizedLink";
import { useSession, signIn, signOut } from "next-auth/react";

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
import Wrapper from "../wrapper";

const UserHeader = () => {
  const { data: session } = useSession();

  const getFirstName = (name) => {
    let first = name.split(" ")[0];

    return first;
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Container>
      {session ? (
        <Logged>
          <img
            src="/icon-user.svg"
            alt="Avatar do usuário"
            width={25}
            height={25}
          />

          <User_Name>
            <Wrapper>{getFirstName(session.user.name)}</Wrapper>
          </User_Name>
          <Bt_Menu>
            <img src="/down.svg" alt="dropdown button" />
          </Bt_Menu>
          {/* <button onClick={handleLogout}>sair</button> */}
        </Logged>
      ) : (
        <No_Logged>
          <CustomizedLink link="/entrar">
            <Bt_LogIn>Entrar</Bt_LogIn>
          </CustomizedLink>

          <CustomizedLink link={"/cadastrar"}>
            <Bt_SingIn>Cadastrar</Bt_SingIn>
          </CustomizedLink>
        </No_Logged>
      )}
    </Container>
  );
};

export default UserHeader;

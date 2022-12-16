import CustomizedLink from "../../customizedLink";
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
  Dropdown_Menu,
} from "./styles";
import Wrapper from "../../wrapper";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const UserHeader = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //cria refs pra monitorar cliques fora do menu de dropdown
  const buttonMenuRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  //chama hook que monitora os cliques fora do botao e menu
  useOutSide(buttonMenuRef, dropdownMenuRef);

  //retorna o primeiro nome
  const getFirstName = (name) => {
    let first = name.split(" ")[0];
    return first;
  };

  //faz logout da conta logada
  const handleLogout = () => {
    localStorage.setItem("loggedUser", undefined);
    signOut();
  };

  //abre ou fecha o menu dropdown
  const toggleDropdownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //hook criado para monitorar os cliques fora do menu e do botão de dropdown
  //quando um clique fora acontece, o menu é fechado
  function useOutSide(btnRef, dropRef) {
    useEffect(() => {
      //função que adiciona listener de clique que verifiqua se os elementos referenciados recebem clique fora
      function handleOutside(event) {
        if (
          btnRef.current &&
          dropRef.current &&
          !btnRef.current.contains(event.target) &&
          !dropRef.current.contains(event.target)
        ) {
          //atualiza o estado do menu para fechado
          setIsMenuOpen(false);
        }
      }
      document.addEventListener("click", handleOutside);
    }, [btnRef, dropRef]);
  }

  return (
    <Container>
      {session ? (
        <Logged>
          <Image
            src={session?.user?.image}
            alt="Avatar do usuário"
            width={"35"}
            height={"35"}
            style={{ borderRadius: "50px" }}
          />
          <User_Name>
            <Wrapper>{getFirstName(session.user.name)}</Wrapper>
          </User_Name>
          <Bt_Menu onClick={toggleDropdownMenu} ref={buttonMenuRef}>
            <img src="/down.svg" alt="dropdown button" />
          </Bt_Menu>

          <Dropdown_Menu isMenuOpen={isMenuOpen} ref={dropdownMenuRef}>
            <ul>
              <li>
                <CustomizedLink link={`/profile/${session.user.email}`}>
                  <Wrapper>Perfil</Wrapper>
                </CustomizedLink>
              </li>
              <li onClick={handleLogout}>
                <Wrapper>Sair</Wrapper>
              </li>
            </ul>
          </Dropdown_Menu>
          {/* <button onClick={handleLogout}>sair</button> */}
        </Logged>
      ) : (
        <No_Logged>
          <CustomizedLink link="/entrar">
            <Bt_LogIn>Entrar</Bt_LogIn>
          </CustomizedLink>

          {/* <CustomizedLink link={"/cadastrar"}>
            <Bt_SingIn>Cadastrar</Bt_SingIn>
          </CustomizedLink> */}
        </No_Logged>
      )}
    </Container>
  );
};

export default UserHeader;

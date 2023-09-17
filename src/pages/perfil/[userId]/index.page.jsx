import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/wrapper";
import { getUserByEmail } from "../../../lib/fetchUsers";
import { authOptions } from "../../api/auth/[...nextauth].page";
// import { getUserByEmail } from "../../lib/fetchUsers";

import Image from "next/image";
import { SubmitBtn } from "./styles";
import CustomizedLink from "../../../components/customizedLink";

function ProfilePage({ user }) {
  function handleGoToEdit() {}
  // console.log("user: ", user);
  return (
    <>
      <h2>Meu perfil</h2>
      <Wrapper padding>
        <Image
          src={user?.avatarUri}
          alt="Avatar do usuário"
          width={"90"}
          height={"90"}
          style={{ borderRadius: "50px" }}
        />
      </Wrapper>
      <Wrapper flex column>
        <Wrapper flex row padding="bottom">
          <Wrapper padding="right">nome:</Wrapper>
          <Wrapper>{user?.name}</Wrapper>
        </Wrapper>
        <Wrapper flex row padding="bottom">
          <Wrapper padding="right">email:</Wrapper>
          <Wrapper>{user?.email}</Wrapper>
        </Wrapper>
        <Wrapper flex row padding="bottom">
          <Wrapper padding="right">tel:</Wrapper>
          <Wrapper>{user?.tel}</Wrapper>
        </Wrapper>
        <Wrapper flex row padding="bottom">
          <Wrapper padding="right">cpf:</Wrapper>
          <Wrapper>{user?.cpf}</Wrapper>
        </Wrapper>
        <Wrapper flex row padding="bottom">
          <Wrapper padding="right">Tipo de usuário:</Wrapper>
          <Wrapper>{user?.role}</Wrapper>
        </Wrapper>
        <Wrapper center flex row>
          <CustomizedLink link={`/perfil/${user?._id}/edit`}>
            <SubmitBtn>Editar perfil</SubmitBtn>
          </CustomizedLink>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default ProfilePage;

// busca dados do serviço específico
export async function getServerSideProps(context) {
  // busca o token do usuário logado
  const token = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  // verifica se o user está logado, caso contrário, redireciona para o login
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  let user;
  // busca o usuário no banco de dados
  try {
    user = await getUserByEmail(token.user.email);
    console.log("user encotnrado: ", user);
  } catch (error) {
    // redireciona em caso de erro na busca
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  // retorna as props para o componente
  return {
    props: {
      user: JSON.parse(JSON.stringify(user[0])),
    },
  };
}

import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomizedLink from "../../../../components/customizedLink";
import Wrapper from "../../../../components/wrapper";
import { getUserByEmail } from "../../../../lib/fetchUsers";
import { authOptions } from "../../../api/auth/[...nextauth].page";
import InputForm from "../../../servicos/criar/components/form-input";
// import { getUserByEmail } from "../../lib/fetchUsers";

import { SubmitBtn } from "./styles";

function EditProfilePage({ user }) {
  function handleGoToEdit() {}

  function handleSubmit(event) {
    event.preventDefault();
    console.log("formdata ", event);
  }
  console.log("user: ", user);
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
      <Wrapper flex column center>
        <form name="profile-form" onSubmit={handleSubmit}>
          <Wrapper flex row padding="bottom" center>
            <InputForm
              formName="profile-form"
              inputId="name"
              inputLabel="Nome"
              inputName="name"
              type="text"
              value={user?.name}
            />
          </Wrapper>
          <Wrapper flex row padding="bottom" center>
            <InputForm
              formName="profile-form"
              inputId="email"
              inputLabel="Email"
              inputName="email"
              type="text"
              value={user?.email}
              disabled
            />
          </Wrapper>
          <Wrapper flex row padding="bottom" center>
            <InputForm
              formName="profile-form"
              inputId="cpf"
              inputLabel="CPF"
              inputName="cpf"
              type="text"
              value={user?.cpf}
            />
          </Wrapper>
          <Wrapper flex row padding="bottom" center>
            <InputForm
              formName="profile-form"
              inputId="tel"
              inputLabel="Telefone"
              inputName="tel"
              type="text"
              value={user?.tel}
            />
          </Wrapper>

          <Wrapper flex row padding="bottom" center>
            <Wrapper padding center gap="5px">
              <input type="radio" id="customer" name="type" value="customer" />
              <label htmlFor="customer">Cliente</label>
            </Wrapper>
            <Wrapper padding center gap="5px">
              <input
                type="radio"
                id="professional"
                name="type"
                value="professional"
              />
              <label htmlFor="professional">Profissional</label>
            </Wrapper>
          </Wrapper>
          <Wrapper center flex row>
            <SubmitBtn>Salvar</SubmitBtn>
          </Wrapper>
        </form>
      </Wrapper>
    </>
  );
}

export default EditProfilePage;

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

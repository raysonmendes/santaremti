import { unstable_getServerSession } from "next-auth";
import React from "react";
import Head from "../../../components/Head";
import { PageTitle } from "../../../components/styleds";
import Wrapper from "../../../components/wrapper";
import { authOptions } from "../../api/auth/[...nextauth].page";
import ServiceForm from "./components/service-form";

function CreateService({ user }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("recebi esses dados> ", event);
  }

  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Página para criar um novo serviço na plataforma"
      />

      <Wrapper center row>
        <PageTitle>Qual serviço você quer contratar?</PageTitle>
      </Wrapper>
      <ServiceForm user={user} onSubmit={handleSubmit} />
    </>
  );
}

export default CreateService;

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

  // retorna as props para o componente
  return {
    props: { user: JSON.parse(JSON.stringify(token.user)) },
  };
}

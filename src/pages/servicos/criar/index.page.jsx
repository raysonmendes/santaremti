import { unstable_getServerSession } from "next-auth";
import React from "react";
import Head from "../../../components/Head";
import { authOptions } from "../../api/auth/[...nextauth].page";

function CreateService({ user }) {
  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Página para criar um novo serviço na plataforma"
      />

      <h1>Criar Serviço: {user.name}</h1>
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

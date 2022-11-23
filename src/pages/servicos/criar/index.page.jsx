import { unstable_getServerSession } from "next-auth";
import { useRouter } from "next/router";
import React from "react";
import Head from "../../../components/Head";
import { PageTitle } from "../../../components/styleds";
import Wrapper from "../../../components/wrapper";
import { api } from "../../../services/api";

import { authOptions } from "../../api/auth/[...nextauth].page";
import ServiceForm from "./components/service-form";

function CreateService({ user }) {
  const router = useRouter();

  async function fetchUserByEmail(email) {
    try {
      const response = await fetch();
    } catch (error) {}
  }

  // recebe os dados do formulá e cria no banco de dados
  async function handleSubmit(event) {
    event.preventDefault();
    const userId = "637caef1863c1d8855bbe11d";

    // prepara o objeto com as informações do serviço
    const data = {
      name: event.target["service-title"].value,
      duoDate: new Date(event.target["service-duo-date"].value).toISOString(),
      description: event.target["service-description"].value,
      price: event.target["service-price"].value,
      owner: userId,
    };

    // faz a chamada pro endpoint para cadastrar um serviço no banco de dados
    try {
      const response = await api.post("/services", {
        ...data,
      });

      //   redireciona para a página de serviços
      router.push("/servicos");
    } catch (error) {
      console.log("Erro ao criar serviço: ", error);
      alert("Erro ao cadastrar serviço! " + error.message);
      return Promise.reject(error);
    }
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

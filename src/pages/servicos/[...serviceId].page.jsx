import { unstable_getServerSession } from "next-auth";
// import { getToken } from "next-auth/jwt";
import React from "react";

import Head from "../../components/Head";
import { getServiceById } from "../../lib/fetchServices";
import { authOptions } from "../api/auth/[...nextauth].page";
import { Section } from "./styles";

function Servico({ service }) {
  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Página que exibe informações sobre o serviço"
      />
      <Section>
        <h1>Servico: {service.name}</h1>
        <p>
          <strong>Descrição</strong> : {service.description}
        </p>
      </Section>
    </>
  );
}

export default Servico;

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

  // busca o id do serviço carregado
  const { serviceId } = context.query;
  let service;
  // busca o serviço no banco de dados
  try {
    service = await getServiceById(serviceId);
  } catch (error) {
    // redireciona em caso de erro na busca
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
  // retorna as props para o componente
  return {
    props: { service: JSON.parse(JSON.stringify(service)) },
  };
}

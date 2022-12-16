import { unstable_getServerSession } from "next-auth";
// import { getToken } from "next-auth/jwt";
import React, { useState } from "react";
import Modal from "react-modal";

import Head from "../../../components/Head";
import Wrapper from "../../../components/wrapper";
import CustomizedLink from "../../../components/customizedLink";
import { getServiceById } from "../../../lib/fetchServices";
import { authOptions } from "../../api/auth/[...nextauth].page";
import { Section, FooterSection } from "./styles";
import ModalOffer from "./components/offer-modal";
import { getUserByEmail } from "../../../lib/fetchUsers";

function Servico({ service, user }) {
  const [isModalOfferOpen, setIsModalOfferOpen] = useState(false);

  function toggleModalOffer() {
    setIsModalOfferOpen(!isModalOfferOpen);
  }

  function handleSubmitOffer(event) {
    event.preventDefault();
    console.log("mandarei esses dados: ", event);
    const userId = user._id;

    // prepara o objeto com as informações do serviço
    const data = {
      offeredPrice: event.target["offered-price"].value,
      offerer: userId,
      description: event.target["offer-description"].value,
    };

    console.log("dados preparados: ", data);
  }

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
        <FooterSection>
          <button onClick={toggleModalOffer}>Fazer oferta</button>
        </FooterSection>
      </Section>

      <ModalOffer
        isModalOfferOpen={isModalOfferOpen}
        onSubmit={handleSubmitOffer}
        onToggleModaOffer={toggleModalOffer}
        service={service}
      />
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

  // busca no banco de dados o usuário logado
  const user = await getUserByEmail(token.user.email);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  // retorna as props para o componente
  // return {
  //   props: { user: JSON.parse(JSON.stringify(user[0])) },
  // };

  // retorna as props para o componente
  return {
    props: {
      service: JSON.parse(JSON.stringify(service)),
      user: JSON.parse(JSON.stringify(user[0])),
    },
  };
}

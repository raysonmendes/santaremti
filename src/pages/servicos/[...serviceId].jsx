import React, { useEffect, useState } from "react";

import Head from "../../components/Head";
import { getServiceById } from "../../lib/fetchServices";

import { Container, Section } from "./stl_Servico";

function Servico({ service }) {
  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Pagina que lista os serviços que estão em aberto"
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
export async function getServerSideProps(req) {
  const { serviceId } = req.query;
  let service;

  try {
    service = await getServiceById(serviceId);
  } catch (error) {
    // redireciona em caso de erro na busca
    return {
      redirect: {
        permanent: true,
        destination: "/404",
      },
    };
  }

  return {
    props: { service: JSON.parse(JSON.stringify(service)) },
  };
}

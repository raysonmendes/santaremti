import React, { useEffect, useState } from "react";

import Head from "../../components/Head";
import { getServiceById } from "../../lib/fetchServices";

function Servico({ service }) {
  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Pagina que lista os serviços que estão em aberto"
      />
      <h1>meu servico: {service.name}</h1>
      <p>
        <strong>descrição</strong> : {service.description}
      </p>
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

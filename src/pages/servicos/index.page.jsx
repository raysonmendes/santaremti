import React, { useEffect, useState } from "react";

import ServiceCard from "../../components/service-card";

import Head from "../../components/Head";

import { Container } from "./styles";
import { getServices } from "../../lib/fetchServices";

function Servicos({ services }) {
  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Pagina que lista os serviços que estão em aberto"
      />
      <Container>
        {services &&
          services?.map((service, index) => (
            <ServiceCard key={index} data={service} font-size="50px" />
          ))}
      </Container>
    </>
  );
}

export default Servicos;

export async function getStaticProps() {
  const data = await getServices();

  return {
    props: {
      services: JSON.parse(JSON.stringify(data)),
    },
    revalidate: 20,
  };
}

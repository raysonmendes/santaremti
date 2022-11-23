import React, { useEffect, useState } from "react";

import ServiceCard from "../../components/service-card";

import Head from "../../components/Head";
//import styled from "styled-components";

import { Container } from "../../styles/pg_Servicos/stl_Servicos";
import { getServices } from "../../lib/fetchServices";

function Servicos({ services }) {
  // const [serv, setServ] = useState([]);

  // useEffect(() => {
  //   const getServices = async () => {
  //     try {
  //       const response = await api.get("/services");

  //       // const servicesResponse = response.data;

  //       // setServ(servicesResponse);

  //       console.log("veio response: ", response);
  //       setServ(servicesFake);
  //     } catch (error) {
  //       console.log("erro ao buscar dados. ", error.message);
  //     }
  //   };

  //   getServices();
  // }, []);
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

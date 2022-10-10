import React, { useEffect, useState } from "react";
import { api } from "../services/api";

import ServiceCard from "../components/service-card";

import Head from "../components/Head";
import styled from "styled-components";
const Text = styled.h1`
  margin: auto;
  font-family: "Manrope", sans-serif;
  font-size: xx-large;
`;

const servicesFake = [
  {
    id: "1",
    name: "Formatação",
    date: "25/12/2022",
    description: "Por favor formatem meu note",
  },
  {
    id: "2",
    name: "Limpeza de sistema",
    date: "24/12/2022",
    description: "Por favor limpem meu note",
  },
  {
    id: "3",
    name: "Instalação do office",
    date: "04/12/2022",
    description: "Por favor instalem meu office",
  },
];

function Servicos() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        // const response = await api.get("/services");

        // const servicesResponse = response.data;

        // setServices(servicesResponse);
        setServices(servicesFake);
      } catch (error) {
        console.log("erro ao buscar dados. ", error.message);
      }
    };

    getServices();
  }, []);
  return (
    <>
      <Head
        title="Serviços - Santarém TI"
        description="Pagina que lista os serviços disponíveis"
      />
      <Text>Pagina em Construção!</Text>

      {services && services.map((service) => <ServiceCard data={service} />)}
    </>
  );
}

export default Servicos;

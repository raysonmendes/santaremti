import React from "react";
import CustomizedLink from "../customizedLink";
import { ServicesCard } from "../service-card/styles";
function ServiceCard({ data }) {
  return (
    <CustomizedLink link={`/servicos/${data._id}`} noneStyle={true}>
      <ServicesCard>
        <div></div>
        <p>
          <b>Solicitante:</b> Não Identificado
        </p>
        <p>
          <b>Serviço:</b> {data.name}
        </p>
        <p>
          <b>Descrição:</b> {data.description}
        </p>
        <time>
          <b>data: </b> {data.date}
        </time>
      </ServicesCard>
    </CustomizedLink>
  );
}

export default ServiceCard;

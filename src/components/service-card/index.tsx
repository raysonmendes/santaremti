import React from "react";
import CustomizedLink from "../customizedLink";
import { ServicesCard } from "../service-card/styles";
function ServiceCard({ data }) {
  return (
    <CustomizedLink link={`/servicos/${data._id}`} noneStyle={true}>
      <ServicesCard>
        <div></div>
        <b>nome do serviço: {data.name}</b>
        <p>description: {data.description}</p>
        <time>data: {data.date}</time>
      </ServicesCard>
    </CustomizedLink>
  );
}

export default ServiceCard;

import { log } from "console";
import React from "react";
import { ServicesCard } from "../service-card/styles";
function ServiceCard({ data }) {
  console.log("dados: ", data);

  return (
    <ServicesCard>
      <div></div>
      <b>nome do serviço: {data.name}</b>
      <p>description: {data.description}</p>
      <time>data: {data.date}</time>
    </ServicesCard>
  );
}

export default ServiceCard;

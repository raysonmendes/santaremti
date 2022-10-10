import { log } from "console";
import React from "react";

function ServiceCard({ data }) {
  console.log("dados: ", data);

  return (
    <div style={{ marginBottom: "10px", backgroundColor: "#eee" }}>
      <div></div>
      <b>nome do serviço: {data.name}</b>
      <p>description: {data.description}</p>
      <time>data: {data.date}</time>
    </div>
  );
}

export default ServiceCard;

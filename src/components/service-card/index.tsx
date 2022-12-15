import React, { useEffect, useState } from "react";
import CustomizedLink from "../customizedLink";
import { useSession } from "next-auth/react";

import Image from "next/image";
import {
  Data,
  Description,
  Identification,
  RequesterName,
  ServiceTitleArea,
  ServicesCard,
  Title,
  DescriptionTitle,
} from "../service-card/styles";
function ServiceCard({ data }) {
  const [owner, setOwner] = useState("");
  const { data: session } = useSession();
  const getFirstName = (name) => {
    let first = name.split(" ")[0];
    return first;
  };

  function formatDate(date) {
    let formatedDate = new Date(date).toLocaleDateString("pt-BR");
    return formatedDate;
  }

  console.log("veio data: ", data);

  return (
    <CustomizedLink link={`/servicos/${data._id}`} noneStyle={true}>
      <ServicesCard>
        <Identification>
          <b>Solicitante:</b>{" "}
          <RequesterName>
            <Image
              src={
                data.owner.avatarUri ||
                "https://res.cloudinary.com/rayson/image/upload/v1654978326/Santarem%20TI/Menu%20User/Icon_user.png"
              }
              alt="Avatar do usuário"
              width={"35"}
              height={"35"}
              style={{ borderRadius: "50px" }}
            />
            {data.owner.name || data.owner}
          </RequesterName>
          <ServiceTitleArea title={data.name}>
            <b>Serviço:</b> <Title>{data.name}</Title>
          </ServiceTitleArea>
        </Identification>

        <Description>
          <b>Descrição</b>
          <DescriptionTitle>{data.description}</DescriptionTitle>
        </Description>
        <Data>Estimativa de entrega: {formatDate(data.duoDate)}</Data>
      </ServicesCard>
    </CustomizedLink>
  );
}

export default ServiceCard;

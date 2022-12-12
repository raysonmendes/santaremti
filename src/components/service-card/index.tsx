import React from "react";
import CustomizedLink from "../customizedLink";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  Data,
  Description,
  Identification,
  RequesterName,
  ServicesCard,
  Title,
} from "../service-card/styles";
function ServiceCard({ data }) {
  const { data: session } = useSession();
  const getFirstName = (name) => {
    let first = name.split(" ")[0];
    return first;
  };

  return (
    <CustomizedLink link={`/servicos/${data._id}`} noneStyle={true}>
      <ServicesCard>
        <Identification>
          <b>Solicitante:</b>{" "}
          <RequesterName>
            <></>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1654978326/Santarem%20TI/Menu%20User/Icon_user.png"
              }
              alt="Avatar do usuário"
              width={"35"}
              height={"35"}
              style={{ borderRadius: "50px" }}
            />
            O Nome Vai Aqui
          </RequesterName>
          <b>Serviço:</b> <Title>{data.name}</Title>
        </Identification>

        <Description>
          <b>Descrição:</b> {data.description}
        </Description>
        <Data>Crido em: 00/00/0000{data.date}</Data>
      </ServicesCard>
    </CustomizedLink>
  );
}

export default ServiceCard;

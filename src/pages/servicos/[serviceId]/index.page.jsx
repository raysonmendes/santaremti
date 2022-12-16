import { unstable_getServerSession } from "next-auth";
// import { getToken } from "next-auth/jwt";
import React, { useState } from "react";

import Head from "../../../components/Head";
import Wrapper from "../../../components/wrapper";
import CustomizedLink from "../../../components/customizedLink";
import { getServiceById } from "../../../lib/fetchServices";
import { authOptions } from "../../api/auth/[...nextauth].page";
import { Section, FooterSection } from "./styles";
import OfferForm from "./components/offer-modal";
import { getUserByEmail } from "../../../lib/fetchUsers";
import InputForm from "../criar/components/form-input";
import FormTextArea from "../criar/components/form-text-area";
import { SubmitBtn } from "./components/offer-modal/styles";

import Modal from "react-modal";
import { api } from "../../../services/api";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

function Servico({ service, user }) {
  const [isModalOfferOpen, setIsModalOfferOpen] = useState(false);
  console.log("servicooo: ", service);
  const router = useRouter();

  function toggleModalOffer() {
    setIsModalOfferOpen(!isModalOfferOpen);
  }

  async function handleSubmitOffer(event) {
    event.preventDefault();
    if (user.role !== "professional") {
      toggleModalOffer();
      return;
    }

    console.log("mandarei esses dados: ", event);
    const userId = user._id;

    // prepara o objeto com as informações do serviço
    const data = {
      offeredPrice: event.target["offered-price"].value,
      offerer: userId,
      description: event.target["offer-description"].value,
    };

    try {
      const response = await api.post(`/services/${service._id}/offer`, data);

      toast.success("Proposta realizada com sucesso!");
      router.push("/servicos");
    } catch (error) {
      toast.error("Erro ao realizar proposta! " + error.message);
    }
    console.log("dados preparados: ", data);
  }

  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Página que exibe informações sobre o serviço"
      />
      <Wrapper flex row>
        <Section>
          <Wrapper padding="left">
            <h3>Faça sua proposta</h3>
          </Wrapper>
          <h1>Servico: {service.name}</h1>
          <p>
            <strong>Descrição</strong> : {service.description}
          </p>
        </Section>

        <Wrapper flex column>
          <Wrapper padding="left">
            <h3>Faça sua proposta</h3>
          </Wrapper>

          <Wrapper flex row>
            <form
              action="submit"
              name="offer-form"
              onSubmit={handleSubmitOffer}
            >
              <FormTextArea
                formName={"offer-form"}
                required={false}
                textAreaId={"offer-description"}
                textAreaLabel={"Descrição da Proposta"}
                textAreaName={"offer-description"}
              />
              <InputForm
                type={"number"}
                inputId={"offered-price"}
                required={true}
                inputName={"offered-price"}
                formName={"offer-form"}
                inputLabel="Valor da propsta*"
                inputPlaceholder="Digite o valor"
              />

              <Wrapper padding="left">
                <SubmitBtn type="submit">Fazer proposta</SubmitBtn>
              </Wrapper>
            </form>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Modal
        isOpen={isModalOfferOpen}
        style={customStyles}
        contentLabel="Verification Modal"
        onRequestClose={toggleModalOffer}
      >
        <Wrapper flex column>
          <strong>
            Você precisa ter uma conta de Profissional para poder fazer
            propostas!
          </strong>
          <Wrapper flex row>
            <Wrapper padding="top" gap="8px">
              <div onClick={toggleModalOffer}>Cancelar</div>
              <CustomizedLink link={`/perfil/${user._id}/edit`}>
                <div>Editar Conta</div>
              </CustomizedLink>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Modal>
    </>
  );
}

export default Servico;

// busca dados do serviço específico
export async function getServerSideProps(context) {
  // busca o token do usuário logado
  const token = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  // verifica se o user está logado, caso contrário, redireciona para o login
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  // busca o id do serviço carregado
  const { serviceId } = context.query;
  let service;
  // busca o serviço no banco de dados
  try {
    service = await getServiceById(serviceId);
  } catch (error) {
    // redireciona em caso de erro na busca
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  // busca no banco de dados o usuário logado
  const user = await getUserByEmail(token.user.email);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  // retorna as props para o componente
  // return {
  //   props: { user: JSON.parse(JSON.stringify(user[0])) },
  // };

  // retorna as props para o componente
  return {
    props: {
      service: JSON.parse(JSON.stringify(service)),
      user: JSON.parse(JSON.stringify(user[0])),
    },
  };
}

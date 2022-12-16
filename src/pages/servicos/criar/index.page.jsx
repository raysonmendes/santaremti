import { unstable_getServerSession } from "next-auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Head from "../../../components/Head";
import { PageTitle } from "../../../components/styleds";
import Wrapper from "../../../components/wrapper";
import { api } from "../../../services/api";

import { toast } from "react-toastify";

import { authOptions } from "../../api/auth/[...nextauth].page";
import ServiceForm from "./components/service-form";
import CustomizedLink from "../../../components/customizedLink";

import { getUserByEmail } from "../../../lib/fetchUsers";

import Modal from "react-modal";

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

function CreateService({ user }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user.tel === "" || user.cpf === "") {
      setModalOpen(true);
    }
    console.log("usersef: ", user);
  }, []);

  async function fetchUserByEmail(email) {
    try {
      const response = await fetch();
    } catch (error) {}
  }

  // recebe os dados do formulá e cria no banco de dados
  async function handleSubmit(event) {
    event.preventDefault();
    const userId = user._id;

    // prepara o objeto com as informações do serviço
    const data = {
      name: event.target["service-title"].value,
      duoDate: new Date(event.target["service-duo-date"].value).toISOString(),
      description: event.target["service-description"].value,
      price: event.target["service-price"].value,
      owner: userId,
    };

    // faz a chamada pro endpoint para cadastrar um serviço no banco de dados
    try {
      const response = await api.post("/services", {
        ...data,
      });

      toast.success("Serviço postado com sucesso!");
      //   redireciona para a página de serviços
      router.push("/servicos");
    } catch (error) {
      console.log("Erro ao criar serviço: ", error);
      toast.erro("Erro ao cadastrar serviço! " + error.message);
      return Promise.reject(error);
    }
  }

  return (
    <>
      <Head
        title="Serviços Abertos - Santarém TI"
        description="Página para criar um novo serviço na plataforma"
      />

      <Wrapper center row>
        <PageTitle>Qual serviço você quer contratar?</PageTitle>
      </Wrapper>
      <ServiceForm user={user} onSubmit={handleSubmit} />
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        contentLabel="Verification Modal"
      >
        <Wrapper flex column>
          <strong>
            Seu cadastro não está completo. Por favor, complete seu cadastro
            para continuar!
          </strong>
          <Wrapper flex row>
            <div onClick={() => router.back()}>Voltar à página anterior</div>
            <CustomizedLink link={`/perfil/${user._id}/edit`}>
              <div>Completar Cadastro</div>
            </CustomizedLink>
          </Wrapper>
        </Wrapper>
      </Modal>
    </>
  );
}

export default CreateService;

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
  return {
    props: { user: JSON.parse(JSON.stringify(user[0])) },
  };
}

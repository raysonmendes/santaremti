import { getServerSession } from "next-auth";
import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../../lib/fetchUsers";
import { authOptions } from "../../api/auth/[...nextauth].page";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

function ProfilePage({ user }) {
  console.log("Dando uma olhado dentro do user: ", user);
  async function handleSubmit(event) {
    event.preventDefault();

    const userId = user._id;

    let data = {
      name: event.target["name"].value,
      tel: event.target["tel"]?.value,
      cpf: event.target["cpf"]?.value,
      role: event.target["type"]?.value,
    };

    try {
      const response = await api.put(`/users/${user._id}`, data);

      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      alert("Erro ao editar usuário. Tente mais tarde! " + error.message);

      toast.error("Erro ao atualizar perfil! " + error.message);
    }
  }
  function handleGoToEdit() {}

  return (
    <>
      <Box
        className="userInformations"
        sx={{
          width: "100%",
          minHeight: "80vh",
          marginBlock: "1rem",
          padding: "4rem",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginInline: 2.5,
          }}
        >
          Informações do usuário
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 10,
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1.5rem",
              padding: 2.5,
              borderRadius: 10,
              border: "1px solid #000",
              boxShadow:
                "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;",
              height: 350,
            }}
          >
            <Image
              src={user?.avatarUri}
              alt="Avatar do usuário"
              width={"90"}
              height={"90"}
              style={{ borderRadius: "50px" }}
            />
            <Typography
              variant="h4"
              sx={{ fontSize: 24, fontWeight: "600", marginTop: 3 }}
            >
              {" "}
              {user?.name}
            </Typography>
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  Whatsapp:
                </Typography>
                <Typography sx={{ fontSize: 16 }}>{user?.tel}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  E-mail:
                </Typography>
                <Typography sx={{ fontSize: 16 }}>{user?.email}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  Perfil:
                </Typography>
                <Typography sx={{ fontSize: 16 }}>{user?.role}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 5,
              borderRadius: 5,
              border: "1px solid #000",
              width: "60%",
              boxShadow:
                "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;",
            }}
          >
            <form name="edit-user-form" onSubmit={handleSubmit}>
              <Typography
                variant="h3"
                sx={{ fontSize: 24, fontWeight: "600", marginLeft: 1 }}
              >
                Editar Perfil.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "98%",
                  marginInline: "auto",
                  marginTop: 3,
                  padding: 5,
                  gap: 2.5,
                }}
              >
                <TextField
                  id="name"
                  label="Nome"
                  variant="outlined"
                  defaultValue={user?.name}
                />
                <TextField
                  id="cpf"
                  label="CPF"
                  variant="outlined"
                  defaultValue={user?.cpf}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  defaultValue={user?.email}
                />
                <TextField
                  id="tel"
                  label="Whatsapp"
                  variant="outlined"
                  defaultValue={user?.tel}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Tipo de Perfil
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tipo de Perfil"
                    defaultValue={user?.role}
                  >
                    <MenuItem type="input" value={"customer"}>
                      Cliente
                    </MenuItem>
                    <MenuItem type="input" value={"professional"}>
                      Profissional
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button variant="outlined" type="submit">
                  Salvar Alterações!
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
      <Box
        className="userServices"
        sx={{
          width: "100%",
          minHeight: "80vh",
          marginBlock: "1rem",
          padding: "4rem",
          borderRadius: "0.4rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginInline: 2.5,
          }}
        >
          Serviços do usuário
        </Typography>
      </Box>
    </>
  );
}

export default ProfilePage;

// busca dados do serviço específico
export async function getServerSideProps(context) {
  // busca o token do usuário logado
  const token = await getServerSession(context.req, context.res, authOptions);
  // verifica se o user está logado, caso contrário, redireciona para o login
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/entrar",
      },
    };
  }

  let user;
  // busca o usuário no banco de dados
  try {
    user = await getUserByEmail(token.user.email);
    console.log("user encotnrado: ", user);
  } catch (error) {
    // redireciona em caso de erro na busca
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

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
    props: {
      user: JSON.parse(JSON.stringify(user[0])),
    },
  };
}

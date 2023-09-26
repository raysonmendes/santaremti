// Imports
import Head from "../components/Head";
import {
  Section1,
  Sct_Intro,
  Sct_Title,
  Title1,
  Sct_SubIntro1,
  TextP,
  Sct_Button,
  BT1,
  BT2,
  Sct_Image,
} from "../styles/homePage";
import Image from "next/image";
import CustomizedLink from "../components/customizedLink";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head
        title="Home - Santarém TI"
        description="Santarém TI, aqui você encontra os melhores profissionais de TI."
      />

      <Box
        maxWidth={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          variant="h3"
          fontFamily={"Barlow"}
          fontSize={64}
          fontStyle={"normal"}
          fontWeight={700}
          lineHeight={"normal"}
        >
          Bem vindo a Santarém TI
        </Typography>

        <Box display={"flex"} width={"100%"} gap={1} alignItems={"center"}>
          <Box display={"flex"} flexDirection={"column"} flexBasis={"50%"}>
            <Typography
              variant="body1"
              fontFamily={"Manrope"}
              fontSize={32}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"normal"}
            >
              Encontre os melhores profissionais de TI da nossa região.
            </Typography>
            <Box display={"flex"}>
              <Button variant="outlined">Prestar Serviço</Button>
              <Button variant="contained"> Solicitar Serviço</Button>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexBasis={"50%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1654613155/Santarem%20TI/Home%20Page/img_Home.png"
              }
              width={500}
              height={500}
              alt="Uma imagem com o desenho de uma pessoa que trabalha na area de T.I. refletindo sobre algo"
              priority={true}
            />
          </Box>
        </Box>
      </Box>

      {/* <Section1>
        <Sct_Title>
          <Title1>Bem vindo à Santarém TI</Title1>
        </Sct_Title>
        <Sct_Intro>
          <Sct_SubIntro1>
            <TextP>
              Encontre os melhores profissionais de TI da nossa região.
            </TextP>
            <Sct_Button>
              <CustomizedLink link={"/servicos/"}>
                <BT1>Prestar Serviço</BT1>
              </CustomizedLink>
              <CustomizedLink link={"/servicos/criar"}>
                <BT2>Solicitar Serviço</BT2>
              </CustomizedLink>
            </Sct_Button>
          </Sct_SubIntro1>
          <Sct_Image>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1654613155/Santarem%20TI/Home%20Page/img_Home.png"
              }
              width={679}
              height={679}
              alt="Uma imagem com o desenho de uma pessoa que trabalha na area de T.I. refletindo sobre algo"
              priority={true}
            />
          </Sct_Image>
        </Sct_Intro>
      </Section1> */}
    </>
  );
}

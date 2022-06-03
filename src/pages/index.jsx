// Imports
import Head from "../components/Head";
import Contents from "../styles/pg_Home/Content";
import Intro from "../styles/pg_Home/Intro";
import Title from "../styles/pg_Home/sct_Title";
import Title1 from "../styles/pg_Home/Title1";
import Title2 from "../styles/pg_Home/Title2";
import SubIntro1 from "../styles/pg_Home/SubIntro1";
import TextoP from "../styles/pg_Home/TextoP";
import sct_Button from "../styles/pg_Home/sct_Button";
import BT1 from "../styles/pg_Home/BT1";
import BT2 from "../styles/pg_Home/BT2";
import Imagem from "../styles/pg_Home/sct_Image";

import Image from "next/image";

export default function Home() {
  return (
    <Contents>
      <Head title="Home - Santarém TI" />
      <>
        <Intro>
          <Title>
            <Title1>Bem vindo à</Title1>
            <Title2> Santarém TI</Title2>
          </Title>
          <SubIntro1>
            <TextoP>
              Encontre os melhores profissionais de TI da nossa região.
            </TextoP>
            <sct_Button>
              <BT1>Tornar-se Colaborador</BT1>
              <BT2>Buscar Solução</BT2>
            </sct_Button>
          </SubIntro1>

          <Imagem>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1653939863/Santarem%20TI/Home%20Page/img_Homepage_01.jpg"
              }
              width={633}
              height={586}
              objectFit={"fill"}
              layout="responsive"
            />
          </Imagem>
        </Intro>
      </>

      {/* <Footer /> */}
    </Contents>
  );
}

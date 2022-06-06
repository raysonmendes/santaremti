// Imports
import Head from "../components/Head";
import {
  Sct_Contents,
  Sct_Intro,
  Sct_Title,
  Title1,
  Title2,
  Sct_SubIntro1,
  TextP,
  Sct_Button,
  BT1,
  BT2,
  Sct_Image,
} from "../styles/pg_Home/stl_Home";
import Image from "next/image";

export default function Home() {
  return (
    <Sct_Contents>
      <Head title="Home - Santarém TI" />
      <>
        <Sct_Intro>
          <Sct_Title>
            <Title1>Bem vindo à</Title1>
            <Title2> Santarém TI</Title2>
          </Sct_Title>
          <Sct_SubIntro1>
            <TextP>
              Encontre os melhores profissionais de TI da nossa região.
            </TextP>
            <Sct_Button>
              <BT1>Tornar-se Colaborador</BT1>
              <BT2>Buscar Solução</BT2>
            </Sct_Button>
          </Sct_SubIntro1>

          <Sct_Image>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1653939863/Santarem%20TI/Home%20Page/img_Homepage_01.jpg"
              }
              width={633}
              height={586}
              objectFit={"fill"}
              layout="responsive"
            />
          </Sct_Image>
        </Sct_Intro>
      </>

      {/* <Footer /> */}
    </Sct_Contents>
  );
}

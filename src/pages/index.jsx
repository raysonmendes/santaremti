// Imports
import Head from "../components/Head";
import Contents from "../styles/pg_Home/Content";
import Intro from "../styles/pg_Home/Intro";
import Title from "../styles/pg_Home/sct__Title";
import Title1 from "../styles/pg_Home/Title1";
import Title2 from "../styles/pg_Home/Title2";
import SubIntro1 from "../styles/pg_Home/SubIntro1";
import TextoP from "../styles/pg_Home/TextoP";
import Button from "../styles/pg_Home/sct-Button";
import BT1 from "../styles/pg_Home/Title1";
import BT2 from "../styles/pg_Home/BT2";
import Image from "../styles/pg_Home/sct_Image";

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
            <Button>
              <BT1>Tornar-se Colaborador</BT1>
              <BT2>Buscar Solução</BT2>
            </Button>
          </SubIntro1>
          <Image href="../public/img-homepage-01.jpg" />
        </Intro>
      </>

      {/* <Footer /> */}
    </Contents>
  );
}

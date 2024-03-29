import Head from "../../components/Head";
import { Section1, Sct_Image, Sct_Text, Title, Text } from "./styles";
import Image from "next/image";

function Sobre() {
  return (
    <>
      <Head
        title="Sobre - Santarém TI"
        description="Nessa página Você saberá um pouco mais sobre o projeto Snatarém TI"
      />
      <Section1>
        <Sct_Image>
          <Image
            src={
              "https://res.cloudinary.com/rayson/image/upload/v1654978288/Santarem%20TI/Sobre/img_Sobre.png"
            }
            width={577}
            height={577}
            objectFit={"cover"}
            layout="responsive"
          />
        </Sct_Image>
        <Sct_Text>
          <Title>Sobre Santarém TI</Title>
          <Text>
            É uma plataforma criada com o intuito de facilitar a comunicação e
            interação entre usuários e técnicos de TI.
          </Text>
          <Text>
            Para que clientes encontre e escolha os melhores profissionais da
            região de Santarém-Pa. Uma plataforma onde os técnicos encontrem
            serviços para realizar, sendo avaliado de acordo com a satisfação
            dos clientes.
          </Text>
          <Text>
            Uma plataforma onde os técnicos encontrem serviços para realizar,
            sendo avaliado de acordo com a satisfação dos clientes.
          </Text>
        </Sct_Text>
      </Section1>
    </>
  );
}

export default Sobre;

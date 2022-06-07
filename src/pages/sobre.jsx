import Head from "../components/Head";
import {
  Section1,
  Sct_Image,
  Sct_Text,
  Title,
  Text,
} from "../styles/Sobre/stl_Sobre";
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
              "https://res.cloudinary.com/rayson/image/upload/v1653939840/Santarem%20TI/Home%20Page/img_Homepage_04.jpg"
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
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </Text>
          <Text>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </Text>
        </Sct_Text>
      </Section1>
    </>
  );
}

export default Sobre;

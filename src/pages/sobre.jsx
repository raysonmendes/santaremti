import Head from "../components/Head";
import {
  Sct_Contents,
  Sct_Image,
  Sct_Text,
  Title,
  Text,
} from "../styles/Sobre/stl_Sobre";
import Image from "next/image";

function Sobre() {
  return (
    <main>
      <Head title="Sobre - Santarém TI" />
      <Sct_Contents>
        <Sct_Image>
          <Image
            src={
              "https://res.cloudinary.com/rayson/image/upload/v1653939840/Santarem%20TI/Home%20Page/img_Homepage_02.jpg"
            }
            width={633}
            height={586}
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
      </Sct_Contents>
    </main>
  );
}

export default Sobre;

// Imports
import Head from "../components/Head";
import styled from "styled-components";
// Style
const Conteudo = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  top: 60px;
  left: 360px;
  right: 360px;
`;
const Introducao = styled.div`
  top: 99px;
  position: absolute;
`;
const Title = styled.section`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0;
  padding: 0;
`;
const Title1 = styled.h2`
  font-size: 48px;
  color: #212121;
`;
const Title2 = styled.h2`
  padding-left: 10px;
  font-size: 48px;
  color: #223459;
`;
const SubIntro2 = styled.article`
  display: flex;
  position: absolute;
  left: 0;
  width: 512px;
  flex-direction: column;
  top: 94px;
  height: 246px;
`;
const TextoP = styled.p`
  font-size: 32px;
  color: #212121;
  width: 481px;
  height: 117px;
`;
const Botoes = styled.div`
  height: 64px;
  border: none;
  background: none;
  margin-top: 65px;
`;
const BT1 = styled.button`
  width: 245px;
  height: 64px;
  background: #fafafa;
  border: 1px solid #353d9f;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
`;
const BT2 = styled.button`
  width: 245px;
  height: 64px;
  right: 0;
  position: absolute;
  background: #353d9f;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
`;
const Imagem = styled.img`
  position: absolute;
  top: 94px;
  width: 633px;
  height: 586px;
  margin-left: 566px;
`;

// Default
export default function Home() {
  return (
    <Conteudo>
      <Head title="Home - Santarém TI" />
      <>
        <Introducao>
          <Title>
            <Title1>Bem vindo à</Title1>
            <Title2> Santarém TI</Title2>
          </Title>
          <SubIntro2>
            <TextoP>
              Encontre os melhores profissionais de TI da nossa região.
            </TextoP>
            <Botoes>
              <BT1>Tornar-se Colaborador</BT1>
              <BT2>Buscar Solução</BT2>
            </Botoes>
          </SubIntro2>
          <Imagem href="../public/img-homepage-01.jpg" />
        </Introducao>
      </>

      {/* <Footer /> */}
    </Conteudo>
  );
}

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
`;
const Saudacao = styled.text`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0;
  padding: 0;
  font-size: 48px;
  color: #212121;
`;
const SaudacaoC2 = styled.text`
  color: #223459;
  margin-left: 20px;
`;
const SubIntro2 = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  left: 0;
`;
const TextoP = styled.text`
  height: 50%;
  font-size: 32px;
  color: #212121;
`;
const Botoes = styled.button`
  left: 0;
  top: 300px;
  width: 600px;
  height: 64px;
  border: none;
  background: none;
`;
const BT1 = styled.button`
  width: 245px;
  height: 64px;
  background: #fafafa;
  border: 1px solid #223459;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
`;
const BT2 = styled.button`
  background: #223459;
  box-shadow: 3px 4px 10px rgba(34, 24, 116, 0.25);
  border-radius: 8px;
  width: 245px;
  height: 64px;
`;
const Imagem = styled.img`
  position: absolute;
  right: 0%;
  top: 0;
`;

// Default
export default function Home() {
  return (
    <Conteudo>
      <Head title="Home - Santarém TI" />
      <>
        <Introducao>
          <Saudacao>
            Bem vindo à <SaudacaoC2> Santarém TI</SaudacaoC2>
          </Saudacao>
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

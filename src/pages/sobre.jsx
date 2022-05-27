import Head from "../components/Head";
import Header from "../components/Header";
import styled from "styled-components";
import Menu from "../components/Menu";
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #f25ca2;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: #f299ca;
  position: absolute;
  top: 50%;
`;

function Sobre() {
  return (
    <main>
      <Head title="Sobre - Santarém TI" />
      <Wrapper>
        <Title>
          Olá, peço desculpas, mas essa página encontra-se em processo de
          desenvolvimento.
        </Title>
      </Wrapper>
    </main>
  );
}

export default Sobre;

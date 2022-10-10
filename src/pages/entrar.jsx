import Head from "../components/Head";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import {
  Btn_Login,
  Btn_Google,
  Checkbox,
  Container,
  Sct_Email,
  Sct_Forget,
  Sct_Logo,
  Sct_Passworld,
  Sct_Remember,
  Sct_RememberForget,
  Sct_SubTitle,
  Sct_Title,
  Section,
  Stc_SingIn,
} from "../styles/pg_Entrar/stl_Entrar";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignGoogle = () => {
    console.log("login with google");
    console.log("session: ", session);

    signIn("google");
  };

  if (session) {
    router.push("/");
  }

  return (
    <>
      <Head
        title="Entrar - Santarém TI"
        description="Página para realizar seu login e ter acesso as funcionalidades da plataforma Santarém TI."
      />
      <Container>
        <Section>
          <Sct_Logo>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1655049181/Santarem%20TI/FaveIcon/favicon.ico"
              }
              width={35}
              height={35}
              objectFit={"cover"}
              layout="fixed"
            />
            Santarém TI
          </Sct_Logo>
          <Sct_Title>Bem Vindo</Sct_Title>
          <Sct_SubTitle>Faça o login da sua conta</Sct_SubTitle>
          <Sct_Email placeholder="E-mail" />
          <Sct_Passworld placeholder="Senha" />
          <Sct_RememberForget>
            <Sct_Remember>
              <Checkbox type="checkbox" />
              Lembrar credênciais!
            </Sct_Remember>
            <Sct_Forget>Esqueceu a senha?</Sct_Forget>
          </Sct_RememberForget>
          <Btn_Login>Entrar</Btn_Login>
          ou
          <Btn_Google onClick={handleSignGoogle}>
            <img src="/google-logo.svg" alt="me" width={20} height={20} />
            Entre com o Google
          </Btn_Google>
          <Stc_SingIn>Não me cadastrei ainda!</Stc_SingIn>
        </Section>
      </Container>
    </>
  );
}

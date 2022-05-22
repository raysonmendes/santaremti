/* Incio dos imports*/
import Head from "next/head";
import Menu from "../components/Menu";
/* Fim dos imports*/
function Sobre(){
    return (        
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Plataforma para conectar profissional com clinetes de TI" />
                <meta name="author" content="Rayson - Mendes" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Santarém TI</title>            
            </Head>
            <Menu />
            <p>Aqui vai estar descrito um pouco sobre o projeto Santarém TI</p>
        </div>
    )
}

export default Sobre;
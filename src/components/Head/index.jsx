import React from "react";
import propTypes from "prop-types";
import NextHead from "next/head";
import Image from "next/image";

function Head({ title, description }) {
  return (
    <>
      <NextHead>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <title>{title ? title : "Santarém TI"}</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={
            description
              ? description
              : "Plataforma para conectar profissionais e clientes que buscam serviços de Tecnologia da Informação."
          }
        />
        <meta name="author" content="Rayson - Mendes" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/rayson/image/upload/v1655049181/Santarem%20TI/FaveIcon/favicon.ico"
        />
      </NextHead>
    </>
  );
}

Head.propTypes = {
  title: propTypes.string.isRequired,
};

export default Head;

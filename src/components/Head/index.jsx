import React from "react";
import propTypes from "prop-types";
import NextHead from "next/head";

function Head({ title, description }) {
  return (
    <>
      <NextHead>
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
      </NextHead>
    </>
  );
}

Head.propTypes = {
  title: propTypes.string.isRequired,
};

export default Head;

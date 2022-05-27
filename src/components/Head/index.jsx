import React from "react";
import propTypes from "prop-types";
import NextHead from "next/head";
import HeadNext from "next";
function Head({ title }) {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
    </>
  );
}

<HeadNext>
  <meta charSet="utf-8" />
  <meta name="robots" content="index, follow" />
  <meta
    name="description"
    content="Plataforma para conectar profissional com clinetes de TI"
  />
  <meta name="author" content="Rayson - Mendes" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</HeadNext>;

Head.propTypes = {
  title: propTypes.string.isRequired,
};

export default Head;

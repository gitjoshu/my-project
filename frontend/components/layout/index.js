import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React, { useContext } from "react";
import { getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import { Navbar } from "../navbar";

export const Layout = ({ children, categories }) => {
  const global = useContext(GlobalContext);
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon.data.attributes.url)}
        />
      </Head>
      <Navbar categories={categories} global={global} />
      <Container maxW="8xl">{children}</Container>
    </>
  );
};

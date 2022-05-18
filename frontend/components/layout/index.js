import { Container } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useContext } from "react";
import { getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import { Navbar } from "../navbar";

export const Layout = ({ children, categories }) => {
  const global = useContext(GlobalContext);
  const { status } = useSession();
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon.data.attributes.url)}
        />
      </Head>
      {status === "authenticated" && (
        <Navbar categories={categories} global={global} />
      )}
      {status !== "loading" && <Container maxW="8xl">{children}</Container>}
    </>
  );
};

import Head from "next/head";
import React, { useContext } from "react";
import { getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import Navbar from "../Navbar";

const Layout = ({ children, categories }) => {
  const global = useContext(GlobalContext);
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon.data.attributes.url)}
        />
      </Head>
      <Navbar categories={categories} />
      {children}
    </>
  );
};

export default Layout;

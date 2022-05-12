import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import { getQuery } from "../queries";
import getGlobal from "../queries/global";
import { createContext } from "react";
import Head from "next/head";
import { getStrapiMedia } from "../lib/media";
import getCategories from "../queries/categories";
import Layout from "../components/layout";

// Store Strapi Global object in context
export const GlobalContext = createContext({});
function MyApp({ Component, pageProps, categories }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data.attributes.url)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <ChakraProvider>
          <Layout categories={categories}>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const { data: globalRes } = await getQuery(getGlobal);
  const { data: categoriesData } = await getQuery(getCategories);
  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: { global: globalRes.global.data },
    categories: categoriesData.categories.data,
  };
};

export default MyApp;

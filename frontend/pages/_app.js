import App from "next/app";
import { createContext } from "react";
import { Layout } from "../components";
import { getQuery, getCategories, getGlobal } from "../queries";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps, categories }) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global.attributes}>
      <ChakraProvider>
        <Layout categories={categories}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const { data: globalRes } = await getQuery(getGlobal);
  const { data: categoriesData } = await getQuery(getCategories);
  return {
    ...appProps,
    pageProps: { global: globalRes.global.data },
    categories: categoriesData.categories.data,
  };
};

export default MyApp;

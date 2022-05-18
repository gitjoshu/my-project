import React from "react";
import { signIn } from "next-auth/react";
import { Seo } from "../../components";
import { getLoginPage, getQuery } from "../../queries";
import { Button, Heading } from "@chakra-ui/react";

const Auth = ({ loginpage }) => {
  return (
    <>
      <Seo seo={loginpage.seo[0]} />
      <Heading>Inicio de sesión</Heading>
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}`,
          })
        }
      >
        Sign In
      </Button>
    </>
  );
};

export default Auth;

export async function getStaticProps() {
  const { data: loginPageData } = await getQuery(getLoginPage);
  return {
    props: {
      loginpage: loginPageData.inicioSesion.data.attributes,
    },
  };
}

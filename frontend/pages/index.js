import { Box, Button, Center, Container, Heading } from "@chakra-ui/react";
import { CardWithMedia, ThreeColums, Seo, Testiomonials } from "../components";
import { getQuery, getHomePage } from "../queries";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession, getSession } from "next-auth/react";

export default function Home({ homepage }) {
  const { data, status } = useSession();
  console.log(data);
  return (
    <div className={styles.container}>
      <Seo seo={homepage.seo} />
      <main>
        <Heading>
          <Center>{homepage.hero.title}</Center>
        </Heading>
        <Button onClick={() => signIn("google")}>SignIn</Button>
        <Button onClick={() => signOut()}>SignOut</Button>
        <ThreeColums />
        <CardWithMedia />
        <Testiomonials />
      </main>

      <footer className={styles.footer}>Powered by Joshu</footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data: homePageData } = await getQuery(getHomePage);
  return {
    props: {
      homepage: homePageData.homepage.data.attributes,
    },
  };
}

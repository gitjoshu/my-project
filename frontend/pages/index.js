import { useSession } from "next-auth/react";
import { CardWithMedia, Seo, Testiomonials, ThreeColums } from "../components";
import { getHomePage, getQuery } from "../queries";
import { Center, Heading } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home({ homepage }) {
  const { data, status } = useSession();
  console.log(status);
  return (
    <div className={styles.container}>
      <Seo seo={homepage.seo} />
      <main>
        <Heading>
          <Center>{homepage.hero.title}</Center>
        </Heading>
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

import { Box, Container, Heading } from "@chakra-ui/react";
import { CardWithMedia, ThreeColums, Seo, Testiomonials } from "../components";
import { getQuery, getHomePage } from "../queries";
import styles from "../styles/Home.module.css";

export default function Home({ homepage }) {
  return (
    <div className={styles.container}>
      <Seo seo={homepage.seo} />
      <main>
        <Heading>{homepage.hero.title}</Heading>

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

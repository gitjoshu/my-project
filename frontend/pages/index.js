import CardWithMedia from "../components/card-with-media";
import Seo from "../components/seo";
import ThreeColums from "../components/three-columns";
import { getQuery } from "../queries";
import getHomePage from "../queries/homepage";
import styles from "../styles/Home.module.css";

export default function Home({ homepage }) {
  return (
    <div className={styles.container}>
      <Seo seo={homepage.seo} />
      <main>
        <h5 className={styles.title}>
          Las mejores noticias de {homepage.hero.title}
        </h5>
        <ThreeColums />
        <CardWithMedia />
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

import Seo from "../components/seo";
import { getQuery } from "../queries";
import getArticles from "../queries/articles";
import getCategories from "../queries/categories";
import getHomePage from "../queries/homepage";
import styles from "../styles/Home.module.css";

export default function Home({ articles, categories, homepage }) {
  // console.log(articles);
  // console.log(categories);
  // console.log(homepage);
  return (
    <div className={styles.container}>
      <Seo seo={homepage.seo} />
      <main className={styles.main}>
        <h5 className={styles.title}>
          Las mejores noticias de {homepage.hero.title}
        </h5>
      </main>

      <footer className={styles.footer}>Powered by Joshu</footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data: articlesData } = await getQuery(getArticles, {
    actualPage: 1,
    pageSize: 4,
  });
  const { data: categoriesData } = await getQuery(getCategories);
  const { data: homePageData } = await getQuery(getHomePage);
  return {
    props: {
      articles: articlesData.articles,
      categories: categoriesData.categories.data,
      homepage: homePageData.homepage.data.attributes,
    },
  };
}

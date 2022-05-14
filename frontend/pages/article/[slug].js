import ArticleDetail from "../../components/article-detail";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import { getQuery } from "../../queries";
import { getArticleBySlug, getArticles } from "../../queries/articles";

const Article = ({ article }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <ArticleDetail article={article} />
    </>
  );
};

export default Article;

export async function getStaticPaths() {
  const { data: articlesData } = await getQuery(getArticles);
  return {
    paths: articlesData.articles.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: articleData } = await getQuery(getArticleBySlug, params.slug);
  return {
    props: {
      article: articleData.articles.data[0],
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
}

import Image from "next/image";
import Layout from "../../components/layout";
import { getStrapiMedia } from "../../lib/media";
// import NextImage from "../../components/image";
// import Seo from "../../components/seo";
import { getArticleBySlug, getArticlesBySlug } from "../../queries/articles";
// import getArticlesBySlug from "../../queries/articlesBySlug";
import getCategories from "../../queries/categories";
import client from "../../apollo-client";
import { getQuery } from "../../queries";

const Article = ({ article, categories }) => {
  console.log(article);
  const imageUrl = getStrapiMedia(article.attributes.image.data.attributes.url);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      <h1>{article.attributes.title}</h1>
      <Image src={imageUrl} width={50} height={50} />

      <div>
        <p>{article.attributes.description}</p>
        <p>{article.attributes.published_at}</p>
      </div>
    </Layout>
  );
};

export default Article;

export async function getStaticPaths() {
  const { data: articlesData } = await getQuery(getArticlesBySlug);
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
  const { data: categoriesData } = await getQuery(getCategories);
  return {
    props: {
      article: articleData.articles.data[0],
      categories: categoriesData.categories.data,
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
}

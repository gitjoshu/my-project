// import Articles from "../../components/articles";
import { Flex } from "@chakra-ui/react";
import ArticleCard from "../../components/article-card";
import { ArticlesCardGrid } from "../../components/articles-card-grid";
import Seo from "../../components/seo";
import { getQuery } from "../../queries";
import getCategories, { getCategorieBySlug } from "../../queries/categories";

const Category = ({ category }) => {
  // console.log(category.attributes.articles.data[0]);
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.attributes.name}</h1>
          <ArticlesCardGrid articles={category.attributes.articles.data} />
        </div>
      </div>
    </>
  );
};
export default Category;

export async function getStaticPaths() {
  const { data: categoriesData } = await getQuery(getCategories);
  return {
    paths: categoriesData.categories.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: categoryData } = await getQuery(
    getCategorieBySlug,
    params.slug
  );
  return {
    props: {
      category: categoryData.categories.data[0],
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
}

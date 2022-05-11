// import Articles from "../../components/articles";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { getArticlesBySlug } from "../../queries/articles";
import getCategories, { getCategorieBySlug } from "../../queries/categories";
import client from "../../apollo-client";
import axios from "axios";
import { getQuery } from "../../queries";

const Category = ({ category, categories }) => {
  console.log(category);
  //   const seo = {
  //     metaTitle: category.attributes.name,
  //     metaDescription: `All ${category.attributes.name} articles`,
  //   };

  return (
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.attributes.name}</h1>
          {/* <Articles articles={category.attributes.articles.data} /> */}
        </div>
      </div>
    </Layout>
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
  const { data: categoriesData } = await getQuery(getCategories);
  return {
    props: {
      category: categoryData.categories.data[0],
      categories: categoriesData.categories.data,
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
}

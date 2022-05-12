// import Articles from "../../components/articles";
import Seo from "../../components/seo";
import { getQuery } from "../../queries";
import getCategories, { getCategorieBySlug } from "../../queries/categories";

const Category = ({ category, categories }) => {
  console.log(category);
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
          {/* <Articles articles={category.attributes.articles.data} /> */}
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
  const { data: categoriesData } = await getQuery(getCategories);
  return {
    props: {
      category: categoryData.categories.data[0],
      categories: categoriesData.categories.data,
    },
    revalidate: 86400, // 60 * 60 * 24,
  };
}

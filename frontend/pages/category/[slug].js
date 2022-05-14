import { ArticlesCardGrid } from "../../components/articles-card-grid";
import Seo from "../../components/seo";
import { getQuery } from "../../queries";
import { getCategorieBySlug, getCategories } from "../../queries/categories";

const Category = ({ category }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <>
      <Seo seo={seo} />
      <h1>{category.attributes.name}</h1>
      <ArticlesCardGrid articles={category.attributes.articles.data} />
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

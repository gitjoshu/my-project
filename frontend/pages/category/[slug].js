import { Heading } from "@chakra-ui/react";
import { ArticlesCardGrid } from "../../components";
import { Seo } from "../../components/seo";
import { getQuery, getCategorieBySlug, getCategories } from "../../queries";

const Category = ({ category }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <>
      <Seo seo={seo} />
      <Heading>{category.attributes.name.toUpperCase()}</Heading>
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

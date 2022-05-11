import { gql } from "@apollo/client";

const getCategories = () => gql`
  query Category {
    categories {
      data {
        attributes {
          name
          slug
          createdAt
        }
        id
      }
    }
  }
`;
export default getCategories;

export const getCategorieBySlug = (slug) => gql`
  query CategoriesBySlug {
    categories(filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          name
          slug
          createdAt
        }
        id
      }
    }
  }
`;

import { gql } from "@apollo/client";

const getArticles = ({ actualPage, pageSize }) => gql`
  query Article {
    articles(pagination: { page: ${actualPage}, pageSize: ${pageSize} }, sort: "createdAt:desc") {
      data {
        attributes {
          title
          description
          createdAt
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;
export default getArticles;

export const getArticlesBySlug = () => gql`
  query ArticlesBySlug {
    articles {
      data {
        attributes {
          slug
        }
        id
      }
    }
  }
`;

export const getArticleBySlug = (slug) => gql`
  query ArticleBySlug {
    articles(filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          title
          description
          createdAt
          image {
            data {
              attributes {
                ext
                url
              }
            }
          }
        }
        id
      }

      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

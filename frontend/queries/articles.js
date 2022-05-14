import { gql } from "@apollo/client";

export const getArticles = () => gql`
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
          content
          createdAt
          image {
            data {
              attributes {
                ext
                url
              }
            }
          }
          author {
            data {
              attributes {
                name
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
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

export const getArticlesWithMetaAndPagination = ({
  actualPage,
  pageSize,
}) => gql`
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

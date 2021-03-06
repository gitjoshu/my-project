import { gql } from "@apollo/client";

export const getCategories = () => gql`
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

export const getCategorieBySlug = (slug) => gql`
  query CategoriesBySlug {
    categories(filters: { slug: { eq: "${slug}" } }) {
      data {
        attributes {
          name
          slug
          createdAt
          articles {
            data {
              attributes {
                title
                description
                content
                slug
                image {
                  data {
                    attributes {
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
                createdAt
              }
            }
          }
        }
        id
      }
    }
  }
`;

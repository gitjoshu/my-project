import { gql } from "@apollo/client";

export const getHomePage = () => gql`
  query Homepage {
    homepage {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
          }
          hero {
            title
          }
        }
      }
    }
  }
`;

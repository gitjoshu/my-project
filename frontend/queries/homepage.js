import { gql } from "@apollo/client";

const getHomePage = () => gql`
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
export default getHomePage;

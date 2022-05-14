import { gql } from "@apollo/client";

export const getGlobal = () => gql`
  query Global {
    global {
      data {
        attributes {
          siteName
          defaultSeo {
            shareImage {
              data {
                attributes {
                  name
                  ext
                  url
                }
              }
            }
          }
          favicon {
            data {
              attributes {
                ext
                url
              }
            }
          }
        }
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const getLoginPage = () => gql`
  query InicioSesion {
    inicioSesion {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            shareImage {
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
  }
`;

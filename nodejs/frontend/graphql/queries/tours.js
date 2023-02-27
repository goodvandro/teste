import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query toursTransportes($slug: String!) {
        paginas: toursTransportes(where: { slug${language}: $slug }) {
        nome:nome${language}
        slug:slug${language}
        body {

        ... on ComponentContentText {
            texto${language}
            params{
              background_color
              padding
              background{
                url
              }
              background_posicao
            }
        }
        ... on ComponentContentCards{
          card{
            nome
            telefone
            website
            morada
            email
            estrelas
            imagem{
              url
            }
          }
        }
        }
        banner {
          url
        }
        metadata {
          title:title${language}
          description:description${language}
          imagem_partilha {
            url
          }
        }
      }
    }
  `;
}
import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query Restaurantes($slug: String!) {
        paginas: restaurantes(where: { slug${language}: $slug }) {
        nome:nome${language}
        slug:slug${language}
        descricao:descricao${language}
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
          ... on ComponentContentSplitWithImages {
            texto${language}
            imagens {
              url
            }
            alinhamento
            background{
              url
            }
            background_posicao
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
        icon {
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
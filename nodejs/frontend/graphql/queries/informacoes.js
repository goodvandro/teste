import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    # Write your query or mutation here
query Informacoes($slug: String!) {
        paginas: informacoes(where: { slug: $slug }) {
        nome:nome${language}
        slug:slug${language}
        banner {
          url
        }
        icon {
          url
        }
        descricao:descricao${language}
        descricao_curta:descricao_curta${language}
        body {

            ... on ComponentContentText {
              texto
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
              params{
                background_color
                padding
                background{
                  url
                }
                background_posicao
              }
            }
            ... on ComponentContentCardsFeriado{
              card{
                  titulo:titulo${language}
                  texto:texto${language}
                  data:data
              }
              params{
                background_color
                padding
                background{
                  url
                }
                background_posicao
              }
            }
          ... on ComponentContentCardsGeral{
            Card{
              titulo:titulo${language}
              texto:texto${language}
              imagem{
                url
              }
            }
            params{
              background_color
              padding              
              background{
                url
              }
              background_posicao
            }
          }
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
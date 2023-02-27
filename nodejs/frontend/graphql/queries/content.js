import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query Paginas($slug: String!) {
      paginas: paginas(where: { slug: $slug }) {
      nome: nome
      slug

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

        ... on ComponentContentExperiencias {
            estilo
            experiencias{
              nome:nome${language}
              descricao:descricao${language}
              descricao_curta:descricao_curta${language}
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

        ... on ComponentContentSlider {
          Slide {
            imagem {
              url
            }
            legenda${language}
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

        ... on ComponentContentVideo {
          youtube
          thumbnail {
            url
          }
          ficheiro {
            url
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

        
        ... on ComponentContentSobreCategorias {
          sobre_nos {
            nome
            thumbnail {
              url
            }
            slug
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

        ... on ComponentContentCardsToursTransportes {
            tours_transportes:cardHoverUrl {
                nome: titulo${language}
                slug: ancora${language}
                thumbnail:imagem {
                    url
                }
            }
            params {
                background_color
                padding
                background {
                    url
                }
                background_posicao
            }
        }

      }
      banner {
        url
      }
      metadata {
        title: title
        description: description
        imagem_partilha {
          url
        }
      }
    }
    razoes:razoe{
      titulo:titulo${language}
      texto:texto${language}
      razoes{
        titulo:titulo${language}
        imagem{
          url
        }
      }
    }
  }
  `;
}
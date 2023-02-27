import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query SobreNos($slug: String!) {
        paginas: sobreNos(where: { slug${language}: $slug }) {
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

        ... on ComponentContentClima{
          texto:texto${language}
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
        
        ... on ComponentContentImageList{
          items{
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


        ... on ComponentContentVideo {
          youtube
          thumbnail {
            url
          }
          ficheiro {
            url
          }
        }
        
        ... on ComponentContentTimeline {
          timeline {
            ano
            titulo:titulo${language}
            texto:texto${language}
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
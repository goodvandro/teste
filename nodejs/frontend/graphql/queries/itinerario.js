import gql from 'graphql-tag'

export function queryItinerario(language) {
  return gql`
    query itinerarios($slug: String!) {
      itinerario:itinerarios(where: { slug: $slug }){
        nome:nome${language}
        slug:slug${language}
        banner{
          url
        }
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
        }
        metadata {
          title: title
          description: description
          imagem_partilha {
            url
          }
        }
      } 
    }
  `
}

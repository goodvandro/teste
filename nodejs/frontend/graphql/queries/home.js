import gql from "graphql-tag";

export function query(language) {
  return gql`
    # Write your query or mutation here
query home($slug: String!){
      bannerSlider: paginas(where: {_or: [{ slug: "lugares"},{ slug: "o-que-fazer"},{ slug: "onde-dormir"},{ slug: "onde-dormir" },{ slug: "onde-comer" }]} ){
        nome:nome
        slug:slug
        banner{
          url
        }
      }
  		pagina:paginas(where: { slug: $slug }){
        nome
        banner{
          url
        }    
        body{
          ... on ComponentContentText{
            texto:texto
            params{
              background_color
              padding
              background{
                url
              }
              background_posicao
            }
          }
          ... on ComponentContentSplitWithImages{
            texto
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
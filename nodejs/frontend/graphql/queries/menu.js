import gql from "graphql-tag";

export function queryMenu(language) {
  return gql`
    query menuPrincipal {
  menuPrincipal {
    menuTopItem {
      titulo: titulo${language}${language}
      slug: slug${language}
      seccoes {
        titulo: titulo${language}
        slug: slug${language}
        body {
          ... on ComponentNestedMenuItemAlojamentos {
            titulo: titulo${language}
            alojamentos {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemCategorias {
            titulo: titulo${language}
            categorias {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemInformacoes {
            titulo: titulo${language}
            informacoes {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemLocaisActividades {
            titulo: titulo${language}
            locais_e_actividades {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemPaginas {
            titulo: titulo${language}
            paginas {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemRegioes {
            titulo: titulo${language}
            regioes {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemRestaurantes {
            titulo: titulo${language}
            restaurantes {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemSobreNos {
            titulo: titulo${language}
            sobre_nos {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemToursTransportes {
            titulo: titulo${language}
            tours_transportes {
              nome: nome${language}
              slug: slug${language}
            }
          }
          ... on ComponentNestedMenuItemDestaque {
            items {
              titulo: titulo${language}
              ancora: ancora${language}
              imagem{
                url
              }
              alojamento {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              categoria {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              informacao {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              local_e_actividade {
                slug: slug${language}
                imagem:imagem{
                  url
                }
                regiao{                  
                  slug: slug${language}
                }
              }
              pagina {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              regiao {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              restaurante {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              tours_transporte {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              sobre {
                imagem:banner{
                  url
                }
                slug: slug${language}
              }
              alojamentos {
                slug: slug${language}
              }
            }
          }
        }
      }
    }
  }
}

  `;
}
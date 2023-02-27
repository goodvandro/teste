import gql from "graphql-tag";

// Main query to get page-specific content
export function queryCategorias(language) {
  return gql`
    query categorias {
      categorias:categorias {
          nome: nome${language}
          descricao:descricao${language}
            slug:slug${language}
          banner{
              url
          }
          imagem {
              url
          }
          icon{
              url
          }
          icon_pagina{
              url
          }
          locais_e_actividades{
              regiao{
                  ilha{
                    slug:slug${language}
                  }
              }
          }
      }
    }
  `;
}
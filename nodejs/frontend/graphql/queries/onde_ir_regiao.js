import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query OndeIr($slug: String!,$slugRegiao:String!) {

      categoria:categorias(where: {slug:$slug} ) {
          nome: nome
          descricao:descricao
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
      }
      
      locais:locaisEActividades(where: {categorias: {slug:$slug} } ){
          nome
          imagem{
              url
          }
          descricao
      }

      categorias: categorias(where: { locais_e_actividades:{regiao:{slug:$slugRegiao}}}) {
        nome: nome
        slug: slug
        descricao: descricao
        imagem {
          url
        }
        banner {
          url
        }
        icon {
          url
        }
      }
      
    }

  `;
}
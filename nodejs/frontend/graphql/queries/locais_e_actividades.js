import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query locaisEActividades($slug: String!,$slugIlha: String!) {
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
        
        # locais:locaisEActividades(where: {categorias: {slug:$slug} } ){
        #     nome
        #     imagem{
        #         url
        #     }
        #     descricao
        #     regiao{
        #         ilha{
        #             slug
        #         }
        #     }
        # }
        locais:locaisEActividades(where: { regiao:{ilha:{slug:$slugIlha}}} ){
            nome
            imagem{
                url
            }
            descricao
            regiao{
                ilha{
                    slug
                }
            }
            categorias{
                slug
            }
        }
        
        categorias: categorias(where: { locais_e_actividades:{regiao:{ilha:{slug:$slugIlha}}}}) {
            nome: nome
            slug: slug
            descricao: descricao
            banner{
                url
            }
            imagem {
                url
            }
            icon {
                url
            }
        }
    }
  `;
}
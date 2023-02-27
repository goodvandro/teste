import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    query OndeIr($slug: String!) {

      locais:locaisEActividades(where: { regiao: { slug: $slug } }) {
        slug: slug${language}
        nome: nome
        imagem {
          url
        }
        descricao
        regiao {
          slug: slug${language}
        }
      }

      paginas:regioes(where: { slug: $slug }) {
        slug: slug${language}
        nome
        onde_ir_texto
        banner {
          url
        }
      }

      categorias: categorias(where: { locais_e_actividades:{regiao:{slug:$slug}}}) {
        nome: nome
        slug: slug${language}
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
        locais_e_actividades{
          nome:nome${language}
        }
      }
      
    }

  `;
}
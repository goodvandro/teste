import gql from "graphql-tag";

// Main query to get page-specific content
export function query(language) {
  return gql`
    # Write your query or mutation here
query oQueFazer($slug: String!) {
  ilhas: ilhas(where: { slug: $slug }) {
    nome: nome
    slug: slug
    texto: o_que_fazer_texto
    banner {
      url
    }
  }
  categorias: categorias(where: { locais_e_actividades:{regiao:{ilha:{slug:$slug}}}}) {
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
    locais_e_actividades{
      nome:nome${language}
    }
  }
}


  `;
}
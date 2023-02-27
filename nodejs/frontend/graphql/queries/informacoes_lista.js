import gql from "graphql-tag";

// Main query to get page-specific content
export function queryInfo(language) {
  return gql`
    # Write your query or mutation here
query Informacoes {
        informacoes{
        nome:nome${language}
        slug:slug${language}
        icon {
          url
        }
        descricao_curta:descricao_curta${language}
        descricao:descricao${language}
      }
    }
  `;
}
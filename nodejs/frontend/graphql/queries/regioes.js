import gql from "graphql-tag";

export function queryRegioes(language) {
  return gql`
    query regioes{
        regioes{
        nome:nome${language}
        slug:slug${language}
        resumo:resumo${language}
        banner{
          url
        }
        thumbnail{
          url
        }
      }
    }
  `;
}
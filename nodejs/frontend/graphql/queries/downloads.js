import gql from "graphql-tag";

export function queryDownloads(language) {
  return gql`
    query downloads($tipo: String!) {                
        downloads: downloads(where: { tipo: $tipo}) {
            nome: nome${language}
            tipo
            ficheiro {
                url
            }
        }
    }
  `;
}
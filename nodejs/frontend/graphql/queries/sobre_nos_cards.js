import gql from "graphql-tag";

export function query(language) {
  return gql`
    query sobreNosCards($slug: String!){
      sobreNosCards:sobreNos(where: { slug_ne: $slug${language}}){
        nome:nome${language}
        slug:slug${language}
        thumbnail{
          url
        }
      }
    }
  `;
}
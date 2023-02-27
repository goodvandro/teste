import gql from "graphql-tag";

export function query(language) {
  return gql`
    query toursTransportes($slug: String!) {
        tours: toursTransportes(where: { slug_ne: $slug${language}}) {
        nome:nome${language}
        slug:slug${language}
    		thumbnail{
          url
        }
      }
    }
  `;
}
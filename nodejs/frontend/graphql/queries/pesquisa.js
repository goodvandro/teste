import gql from 'graphql-tag'

export function queryPesquisa(language) {
  return gql`
    query Pesquisa($term: String!) {
      alojamentos(where: {_or: [{ nome${language}_contains: $term }, { descricao${language}_contains: $term }]} ){
        nome:nome${language}
        slug:slug${language}
      } 
      categorias(where: {  _or: [{ nome${language}_contains: $term }, { descricao${language}_contains: $term }] } ){
        nome:nome${language}
        slug:slug${language}
        texto:descricao${language}
        locais_e_actividades{
            regiao{
                slug:slug${language}
            }
        }
      }      
      paginas(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      ilhas(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      informacoes(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      locaisEActividades(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
        texto:descricao${language}
        regiao{
            slug:slug${language}
        }
      }
      regioes(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      restaurantes(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      sobreNos(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
      toursTransportes(where: {_or: [{ nome${language}_contains: $term }] } ){
        nome:nome${language} 
        slug:slug${language}
      }
    }
  `
}

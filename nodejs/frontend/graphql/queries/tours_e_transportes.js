import gql from "graphql-tag";

export function queryToursTransportes(language) {
  return gql`
    query toursTransportes($slug: String!) {
        pagina:toursTransportes(where: { slug: $slug }) {
            nome: nome${language}
            slug: slug${language}
            banner {
                url
            }
            body {
                ... on ComponentContentText {
                    texto: texto${language}
                    sectionId
                    params {
                    background_color
                    padding
                    background {
                        url
                    }
                    background_posicao
                    }
                }
                ... on ComponentContentCards {
                    card {
                        nome
                        telefone
                        email
                        imagem {
                            url
                        }
                    }
                    estilo
                    params {
                        background_color
                        padding
                        background {
                            url
                        }
                        background_posicao
                    }
                }
                ... on ComponentContentSplitWithImages {
                    sectionId
                    texto:texto${language}
                    imagens {
                        url
                    }
                    alinhamento
                    background {
                        url
                    }
                    background_posicao
                    params {
                        background_color
                        padding
                        background {
                            url
                        }
                        background_posicao
                    }
                }
                ... on ComponentContentSlider {
                    Slide {
                        imagem {
                            url
                        }
                        legenda:legenda${language}
                    }
                    params {
                        background_color
                        padding
                        background {
                            url
                        }
                        background_posicao
                    }
                }
                ... on ComponentContentCardsToursTransportes {
                    tours_transportes:cardHoverUrl {
                        nome: titulo${language}
                        slug: ancora${language}
                        thumbnail:imagem {
                            url
                        }
                    }
                    params {
                        background_color
                        padding
                        background {
                            url
                        }
                        background_posicao
                    }
                }
            }
        }
    }
  `;
}
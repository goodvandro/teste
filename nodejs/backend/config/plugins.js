module.exports = ({env}) => ({
  // email: {
  //     provider: "nodemailer-v3",
  //     providerOptions: {},
  //     settings: {
  //         host: 'scar.made2grow.com',
  //         port: 465,
  //         username: 'form@remoteworkingcaboverde.com',
  //         password: '[n&hapEC?bJf',
  //         secure: true
  //     }
  // }
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 15,
    amountLimit: 300,
    apolloServer: {
      tracing: false,
    },
  },
})
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5007),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c688f065e10c915fe0cc7f3b96ed51fb'),
    },
  },
});

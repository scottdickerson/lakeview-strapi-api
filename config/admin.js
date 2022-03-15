module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6edd5b3acd64736bf076475ecdc16ccd'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10e65518f4e7128cc9c5697be417f206'),
  },
});

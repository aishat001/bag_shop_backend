const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_xmMr8UDmGRy0FpSuSOP6d1zBi0iG/ECnrIFOh4A",
        apiToken: "dXDmpAcLBrIXVblcrDtYIGlx",
        appFilter: "bag-shop-backend",
        // teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  },
});

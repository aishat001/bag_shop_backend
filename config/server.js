module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["WmBZmklkNZY6u1J10QRidw==", "9D5yTEEWORQb+VewUT9AfQ==" , "A0rOq0jrCu1zfNgsmGet/A==,toi6UYzBGgWBmxnBcXARTA=="]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

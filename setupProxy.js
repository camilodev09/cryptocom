const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pro-api.coinmarketcap.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/cryptocurrency/listings/latest'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'd9c79f73-f217-4ac5-a042-79d7b69f4c0f'
      }
    })
  );
};

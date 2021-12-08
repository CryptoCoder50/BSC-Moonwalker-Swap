const { createProxyMiddleware } = require('http-proxy-middleware');
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://moonwalker.network/bsc-api-prices','https://crowdin.com/project/bsc-homemoonwalkernetwork',
      changeOrigin: true,
    })
  );
};

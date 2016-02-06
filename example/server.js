const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const devMiddlewareOptions = {
  noInfo: true,
  publicPath: '/public/scripts/',
}
const config = require('../webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, devMiddlewareOptions))
app.use('/public', express.static('public'))
app.use('/src', express.static('src'))

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <body>
      <div class='content'></div>
      <script type="text/javascript" src="/public/scripts/bundle.js"></script>
    </body>
    </html>
  `)
})

const port = 3000
app.listen(port, () => {
  console.log(`listening at localhost:${port}/`)
})

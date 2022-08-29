const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')
const port = parseInt(process.env.PORT, 10) || 3100
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  hostname: "localhost",
  port: 3100
})
const handler = app.getRequestHandler()
const { parse } = require('url');

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())


  const staticPath = path.join(__dirname, '../static')
  server.use('/static', express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  }))

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl


    if (pathname === '/sw.js' || /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)) {
      const filePath = path.join(__dirname, '.next', pathname)
      return app.serveStatic(req, res, filePath)
    } else {
      return handler(req, res, parsedUrl)
    }
  })

  startServer()

  function startServer() {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})

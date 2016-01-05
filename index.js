const http = require('http')
const routes = require('patterns')()
const st = require('st')
const serve = st({
  path: 'browser/dist'
})
const render = require('./server/render')
const trees = require('./server/trees')

routes.add('GET /', render(trees.home))
routes.add('GET /about', render(trees.about))

http.createServer((req, res) => {
  const m = routes.match(req.method + ' ' + req.url)
  if (!m) {
    serve(req, res)
    return
  }
  m.value(req, res)
}).listen(9090, () => {
  console.log('server is listening on http://127.0.0.1:9090')
})

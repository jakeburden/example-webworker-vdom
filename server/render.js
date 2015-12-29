const fs = require('fs')
const hyperstream = require('hyperstream')
const vdom = require('virtual-dom-stream')
const gzip = require('oppressor')

module.exports = tree => (req, res) => {
  const hs = hyperstream({
    '#app': {
      _appendHtml: vdom(tree)
    }
  })

  fs.createReadStream('./browser/index.html')
    .pipe(hs)
    .pipe(gzip(req))
    .pipe(res)
}

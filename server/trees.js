const treeIndex = require('../views/index')

module.exports = {
  home: treeIndex(null, {
    url: '/',
    count: 0
  }),
  about: treeIndex(null, {
    url: '/about'
  })
}

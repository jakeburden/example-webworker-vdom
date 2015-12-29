const treeIndex = require('../views/index')

module.exports = {
  home: treeIndex({
    url: '/',
    count: 0
  }),
  about: treeIndex({
    url: '/about'
  })
}

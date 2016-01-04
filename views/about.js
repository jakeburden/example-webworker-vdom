const h = require('virtual-dom/h')

module.exports = () => {
  return h('div', ['Tiny app inspired from ', h(
    'a', {
      attributes: {
        href: 'https://github.com/HenrikJoreteg/feather-app'
      }
    }, ['feather-app.']
  ), h('p', ['However, this uses ', h('a',
    {
      attributes: {
        href: 'http://browserify.org/'
      }
    }, ['browserify']), ' and ', h('a',
      {
        attributes: {
          href: 'https://github.com/Raynos/main-loop'
        }
      }, ['main-loop']), ' instead.'])])
}

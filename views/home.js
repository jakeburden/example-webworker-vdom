const h = require('virtual-dom/h')

module.exports = state => {
  if (!state) state = {}

  return h('div', [
    h('p', ['Welcome Home']),
    h('button', {
      attributes: {
        'data-click': 'decrement'
      }
    }, ['-']),
    h('span', [state.count]),
    h('button', {
      attributes: {
        'data-click': 'increment'
      }
    }, ['+'])
  ])
}

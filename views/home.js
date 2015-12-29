const h = require('virtual-dom/h')

module.exports = state => {
  if (!state) state = {}
  const count = state.count || 0
  return h('div', [
    h('p', ['Welcome Home']),
    h('button', {
      'attributes': {
        'data-click': 'decrement'
      }
    }, ['-']),
    h('span', [count]),
    h('button', {
      'attributes': {
        'data-click': 'increment'
      }
    }, ['+'])
  ])
}

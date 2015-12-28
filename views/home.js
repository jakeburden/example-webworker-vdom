const h = require('virtual-dom/h')

module.exports = count => {
  return h('div', [
    h('p', ['Welcome Home']),
    h('button', {
      'attributes': {
        'data-click': 'decrement'
      }
    }, ['-']),
    h('span', [count || 0]),
    h('button', {
      'attributes': {
        'data-click': 'increment'
      }
    }, ['+'])
  ])
}

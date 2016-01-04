const h = require('virtual-dom/h')

module.exports = (emit, state) => {
  return h('div', [
    h('p', ['Welcome Home']),
    h('button', {
      onclick () {
        emit('decrement')
      }
    }, ['-']),
    h('span', [state.count]),
    h('button', {
      onclick () {
        emit('increment')
      }
    }, ['+'])
  ])
}

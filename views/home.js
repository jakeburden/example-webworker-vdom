const h = require('virtual-dom/h')

module.exports = (worker, state) => {
  return h('div', [
    h('p', ['Welcome Home']),
    h('button', {
      onclick () {
        worker.postMessage({
          type: 'decrement'
        })
      }
    }, ['-']),
    h('span', [state.count]),
    h('button', {
      onclick () {
        worker.postMessage({
          type: 'increment'
        })
      }
    }, ['+'])
  ])
}

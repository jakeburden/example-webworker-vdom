const work = require('webworkify')
const mainLoop = require('main-loop')

const worker = work(require('./worker.thread'))
const app = require('../views/index')

const rootElement = document.getElementById('app')

const loop = mainLoop({
  url: window.location.pathname,
  count: 0
}, app, {
  create: require('virtual-dom/create-element'),
  diff: require('virtual-dom/diff'),
  patch: require('virtual-dom/patch')
})

window.requestAnimationFrame(() => {
  rootElement.replaceChild(loop.target, rootElement.firstChild)
})

worker.onmessage = msg => {
  const state = msg.data
  console.log(state)
  const { url } = state
  loop.update(state)
  if (window.location.pathname !== url) {
    window.history.pushState(null, null, url)
  }
}

worker.postMessage({
  type: 'start',
  payload: {
    url: window.location.pathname
  }
})

window.addEventListener('popstate', () => {
  worker.postMessage({
    type: 'setUrl',
    payload: window.location.pathname
  })
})

document.body.addEventListener('click', e => {
  const pathname = e.target.pathname
  if (pathname) {
    e.preventDefault()
    worker.postMessage({
      type: 'setUrl',
      payload: pathname
    })
    return
  }

  const click = e.target.getAttribute('data-click')
  if (click) {
    e.preventDefault()
    worker.postMessage({
      type: click
    })
  }
})

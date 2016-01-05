const work = require('webworkify')
const main = require('main-loop')
const catchLinks = require('catch-links')

const worker = work(require('./worker.thread'))
const app = require('../views/index')(worker)

const rootElement = document.getElementById('app')

const loop = main({
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

catchLinks(window, pathname => {
  worker.postMessage({
    type: 'setUrl',
    payload: pathname
  })
})

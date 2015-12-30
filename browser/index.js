const work = require('webworkify')
const virtualize = require('vdom-virtualize')
const toJson = require('vdom-as-json/toJson')
const applyPatch = require('vdom-serialized-patch/patch')
const {getLocalPathname} = require('local-links')

const worker = work(require('./worker.thread'))
const rootElement = document.getElementById('app')

worker.onmessage = ({data}) => {
  const { url, payload } = data
  console.log('payload', payload)
  window.requestAnimationFrame(() => {
    applyPatch(rootElement, payload)
  })

  if (window.location.pathname !== url) {
    window.history.pushState(null, null, url)
  }
}

worker.postMessage({
  type: 'start',
  payload: {
    virtualDom: toJson(virtualize(rootElement)),
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
  const pathname = getLocalPathname(e)
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

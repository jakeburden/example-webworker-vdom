'use strict'
const fromJson = require('vdom-as-json/fromJson')
const diff = require('virtual-dom/diff')
const serializePatch = require('vdom-serialized-patch/serialize')
const app = require('../views/index')

module.exports = self => {
  let currentVDOM
  let renderCount = 0

  const state = {
    count: 0,
    url: '/'
  }

  self.onmessage = ({data}) => {
    const { type, payload } = data

    console.log('worker got message:', data)

    const events = {
      start () {
        currentVDOM = fromJson(payload.virtualDom)
        state.url = payload.url
      },
      setUrl () {
        state.url = payload
      },
      increment () {
        state.count ++
      },
      decrement () {
        state.count --
      }
    }

    events[type]()
    console.log('render count:', ++renderCount, 'state', state)

    const newVDOM = app(state)
    const patches = diff(currentVDOM, newVDOM)
    currentVDOM = newVDOM

    self.postMessage({
      url: state.url,
      payload: serializePatch(patches)
    })
  }
}

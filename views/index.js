'use strict'

const h = require('virtual-dom/h')
const home = require('./home')
const about = require('./about')

module.exports = (emit, state) => {
  if (!state) state = {}
  if (!emit) emit = () => {}
  let page
  const url = state.url

  if (url === '/') {
    page = home(emit, state)
  } else if (url === '/about') {
    page = about()
  }

  return h('main', [
    h('h1', ['example webworker & virtual-dom app']),
    h('nav', [
      h('a', {
        attributes: {
          href: '/'
        }
      }, ['home']),
      '|',
      h('a', {
        attributes: {
          href: '/about'
        }
      }, ['about'])
    ]),
    page
  ])
}

'use strict'

const h = require('virtual-dom/h')
const home = require('./home')
const about = require('./about')

module.exports = state => {
  let page
  const url = state
              ? state.url
              : undefined

  if (url === '/') {
    page = home(state)
  } else if (url === '/about') {
    page = about()
  }

  return h('main', [
    h('h1', ['wow']),
    h('nav', [
      h('a', {
        'attributes': {
          'href': '/'
        }
      }, ['home']),
      '|',
      h('a', {
        'attributes': {
          'href': '/about'
        }
      }, ['about'])
    ]),
    page
  ])
}

const work = require('webworkify')
const virtualize = require('vdom-virtualize')
const toJson = require('vdom-as-json/toJson')
const applyPatch = require('vdom-serialized-patch/patch')
const {getLocalPathname} = require('local-links')

const worker = work(require('./worker.thread'))
const rootElement = document.getElementById('app')

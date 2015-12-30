const fs = require('fs')

const browserify = require('browserify')
const concat = require('concat-stream')
const uglifyjs = require('uglify-js')

const b = browserify('./browser/index.js')

b.transform('brfs')
b.transform('babelify', {presets: ['es2015']})
b.bundle()
 .pipe(concat(body => {
   const code = body.toString()
   const result = uglifyjs.minify(code, {fromString: true})
   fs.writeFileSync('browser/app.bundle.js', result.code)
 }))

# example-webworker-vdom

tiny example of using webworkers and virtual-dom.

the server renders an initial view.

the client handles state in a webworker thread.  UI diffing and patching occurs in a rendering loop.

### build
```npm install```


```npm run build:js```

### start
```npm start```

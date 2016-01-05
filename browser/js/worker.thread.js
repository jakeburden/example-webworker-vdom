module.exports = self => {
  const state = {
    count: 0
  }

  self.onmessage = ({data}) => {
    const { type, payload } = data

    const events = {
      start () {
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
    self.postMessage(state)
  }
}

export default {
  methods: {
    setStore: function (name, content) {
      if (!name) return
      if (typeof content !== 'string') {
        content = JSON.stringify(content)
      }
      window.localStorage.setItem(name, content)
    },
    getStore: function (name) {
      if (!name) return
      return window.localStorage.getItem(name)
    },
    removeStore: function (name) {
      if (!name) return
      window.localStorage.removeItem(name)
    }
  }
}

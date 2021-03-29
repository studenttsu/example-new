class PubSub {
  constructor() {
    this.listeners = {};
  }

  on(listener, callback) {
    if (this.listeners[listener]) {
      this.listeners[listener].push(callback);
    } else {
      this.listeners[listener] = [callback];
    }
  }

  emit(action, data) {
    if (this.listeners[action]) {
      this.listeners[action].forEach(l => l(data));
    }
  }
}

export default new PubSub();
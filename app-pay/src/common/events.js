class Events {
  static subscribes = {};

  static subscribe(name, callback) {
    if (!Events.subscribes[name]) {
      Events.subscribes[name] = [];
    }

    const event = (e) => callback(e.detail);
    Events.subscribes[name].push(event);
    window.addEventListener(name, event);
  }

  static unsubscribe(name) {
    if (!Events.subscribes[name]) return;
    const subscribes = Events.subscribes[name];

    subscribes.forEach(callback => window.removeEventListener(name, callback));
  }

  static dispatch(name, params) {
    const customEvent = new CustomEvent(name, { detail: params });
    window.dispatchEvent(customEvent);
  }
}

export default Events;

export class PubSub {
  constructor() {
    this.topics = new Map();
  }

  on(topic, cb) {
    //Conexión inicial.
    let subscribers = this.topics.get(topic);
    if (!subscribers) {
      subscribers = new Set();
      subscribers.add(cb);
      this.topics.set(topic, subscribers);
    } else {
      subscribers = add(cb);
    }
    return () => subscribers.delete(cb); //Desconexión.
  }

  emit(topic, date) {
    let subscribers = this.topics.get(topic);
    subscribers &&
      subscribers.forEach((s) => {
        s(date);
      });
  }
}

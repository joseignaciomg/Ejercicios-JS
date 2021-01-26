import { INTERVALCLOCK } from "./config.js"; //Importa el intervalo de tiempo.
import { topics } from "./topics.js";

class TimerService {
  //Exporta la función que detecta el estado de la suscripción.
  #processID = null; //Inicializa un ID de proceso a "apagado".
  #pubSubs = new Set();
  constructor() {
    this.#processID = setInterval(() => {
      let date = new Date();
      this.#pubSubs.forEach((pubSub) => {
        pubSub.emit(topics.changeDate, date);
      });
    }, INTERVALCLOCK);
  }
  suscribe(pubSub) {
    this.#pubSubs.add(pubSub);
    return () => this.#pubSubs.delete(pubSub);
    //https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval
  } //Si se detecta un "encendido", el ID de proceso se actualiza. La función se ejecuta cada INTERVALCLOCK (1000).

  dispose() {
    //https://developer.mozilla.org/es/docs/Web/API/WindowTimers/clearInterval
    this.#processID && clearInterval(this.#processID); //Si se detecta un "apagado", cancela la acción reiterativa iniciada por setInterval(). Funciona como un if.
    this.#processID = null; //Reinicia la variable a "apagado", a la espera de una nueva suscripción.
  }
}

export default new TimerService();

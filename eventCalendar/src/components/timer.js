import { culture } from "../services/config.js";
import {createEvent} from "../services/event-pubsub.js";
import {topics} from "../services/topics.js";

class Timer extends HTMLElement {
  #time;
  #text;
  #pubsub;
  #unsuscribe;
  date = new Date();

  #update() {
    this.#time.setAttribute("timer", this.date.toISOString()); //A time se le añade el id datetime, cuyo valor es la fecha en formato de cadena de caracteres.
    this.#text.data = Intl.DateTimeFormat(culture, {
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(this.date); //El texto vacío pasa a ser la fecha actual <time datetime="fecha">fecha</time>.
  }

  #create() {
    this.#time = document.createElement("time"); //Crea una etiqueta time.
    this.#text = document.createTextNode(""); //Crea un texto vacío.
    this.#time.appendChild(this.#text); //Introduce el texto vacío en la etiqueta time.
    return this.#time; //Devuelve time con el texto vacío en su interior (<time>" "</time>).
  }

  get pubsub() {
    return this.#pubsub;
  }

  set pubsub(value) {
    this.#pubsub = value;
    if (value) {
      this.#unsuscribe = this.pubsub.on(topics.changeDate, (date) => {
        this.date = date;
        this.#update();
      });
    } else {
      this.#unsuscribe && this.#unsuscribe();
      this.#unsuscribe = null;
    }
  }

  connectedCallback() {
    //Si el estado es "encendido".
    if (!this.pubsub) {
      const event = createEvent(this);
      this.dispatchEvent(event);
    }
    this.appendChild(this.#create()); //Genera la "plantilla".
    this.#update(); //Rellena la "plantilla".
  }

  disconnectedCallback() {
    //Si el estado es "apagado".
    this.removeChild(this.#time); //Elimina la etiqueta.
  }
}

//https://developer.mozilla.org/es/docs/Web/Web_Components/Custom_Elements
//https://developers.google.com/web/fundamentals/web-components/customelements?hl=es
//https://github.com/WICG/webcomponents
customElements.define("gnt-timer", Timer);

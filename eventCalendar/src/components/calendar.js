import TimerService from "../services/timerservice.js";
import "./gridmonth.js";
import "./systemdate.js";
import "./timer.js";
import "./monthdate.js";
import { PubSub } from "../services/pubsub.js";
import { eventname } from "../services/event-pubsub.js";
class Calendar extends HTMLElement {
  #pubSub = new PubSub();
  #unsuscribe = null;
  constructor() {
    super();
    this.addEventListener(eventname, this.handlerPubSub);
  }
  handlerPubSub(ev) {
    const { instance } = ev.detail || {};
    if (instance) {
      instance.pubsub = this.#pubSub;
    }
  }
  connectedCallback() {
    TimerService.suscribe(this.#pubSub);
    this.appendChild(document.createElement("gnt-timer"));
    this.appendChild(document.createElement("gnt-system-date"));
    this.appendChild(document.createElement("gnt-month-date"));
    this.appendChild(document.createElement("gnt-gridmonth"));
  }
}

customElements.define("gnt-calendar", Calendar);

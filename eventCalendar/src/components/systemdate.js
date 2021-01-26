import { isToday as equalsDay } from "../services/dateservice.js";
import { culture } from "../services/config.js";

class SystemDate extends HTMLElement {
  #date = new Date();
  #text;
  #time;
  get date() {
    return this.#date;
  }

  set date(value) {
    if (!value || !(value instanceof Date)) {
      throw "type is not supported";
    }
    if (!equalsDay(value, this.date)) {
      this.#date = value;
      this.#update();
    }
  }

  #update() {
    this.#time.setAttribute("systemdate", this.date.toISOString());
    this.#text.data = Intl.DateTimeFormat(culture, {
      dateStyle: "full",
    }).format(this.date);
  }

  #create() {
    this.#time = document.createElement("time");
    this.#text = document.createTextNode("");
    this.#time.appendChild(this.#text);
    return this.#time;
  }

  connectedCallback() {
    this.appendChild(this.#create());
    this.#update();
  }

  disconnectedCallback() {
    this.removeChild(this.#time);
  }
}

customElements.define("gnt-system-date", SystemDate);

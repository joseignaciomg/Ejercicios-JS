import { isInMonth as equalsMonth } from "../services/dateservice.js";
import { culture } from "../services/config.js";

class MonthDate extends HTMLElement {
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
    if (!equalsMonth(value, this.date)) {
      this.#date = value;
      this.#update();
    }
  }

  #update() {
    this.#time.setAttribute("monthdate", this.date.toISOString());
    this.#text.data = Intl.DateTimeFormat(culture, {
      year: "numeric",
      month: "long",
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

customElements.define("gnt-month-date", MonthDate);

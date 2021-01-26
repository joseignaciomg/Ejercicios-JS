import {
  getMonthCalendar,
  getNextOrPreviousMonth,
  isInMonth as equalsMonth,
} from "../services/dateservice.js";
import "./gridday.js";

class GridMonth extends HTMLElement {
  #date = new Date();
  #childrenDays = [];

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

  nextMonth() {
    this.date = getNextOrPreviousMonth(this.date, 1);
  }

  previousMonth() {
    this.date = getNextOrPreviousMonth(this.date, -1);
  }

  #update() {
    let days = getMonthCalendar(this.date);
    days.forEach((day, i) => {
      this.#childrenDays[i].day = day;
    });
  }

  #create() {
    let days = getMonthCalendar(this.date);
    for (let i = 0; i < days.length; i++) {
      //Bucle desde 0 hasta la longitud de days determinada en dateservice.js, -10-
      let dayGrid = document.createElement("gnt-gridday"); //Crea una etiqueta gnt-gridday, que lleva a gridday,js. -11-
      dayGrid.day = days[i]; //Almacena la fecha recibida en el button creado en gridday.js. -15-
      this.#childrenDays.push(dayGrid); //Introduce el elemento en el array. -16-
      this.appendChild(dayGrid); //Introduce el elemento en la etiqueta gnt-gridday. -17-
    }
  }

  connectedCallback() {
    this.#create();
  }
}

customElements.define("gnt-gridmonth", GridMonth);

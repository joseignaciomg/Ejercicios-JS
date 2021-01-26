export class GridDay extends HTMLElement {
  #day;
  #time;
  #text;

  get day() {
    return this.#day;
  }

  set day(value) {
    //Comprueba si existe la etiqueta time para cada día que recibe. -12-
    this.#day = value;
    if (!this.#time) {
      this.#create();
    }
    this.#update();
  }

  #update() {
    //Hace lo mismo que el update del timer.js -14-
    let datetime = this.#day.date.toISOString();
    this.#time.setAttribute("datetime", datetime);
    this.#text.data = this.#day.date.getDate();
  }

  #create() {
    //Hace lo mismo que el create del timer.js, pero además introduce time como un hijo de button. -13-
    let button = document.createElement("button");
    this.#time = document.createElement("time");
    this.#text = document.createTextNode("");
    this.#time.appendChild(this.#text);
    button.appendChild(this.#time);
    return button;
  }

  connectedCallback() {
    this.appendChild(this.#create());
    this.#update();
  }
}

customElements.define("gnt-gridday", GridDay);

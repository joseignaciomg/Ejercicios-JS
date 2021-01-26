import culture from "./config.js"; //Importa como inicio de la semana el lunes.
const DAYSOFWEEK = 7; //Declara una constante del número de días de una semana.

function getFirstDayOfMonth(date) {
  //-0-
  return new Date(date.getFullYear(), date.getMonth(), 1); //Devuelve el primer día del mes de date.
}

function cloneDate(date) {
  return new Date(date.getTime()); //Clona la fecha date. -4-
}

function addDays(date, number = 1) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
  return new Date(date.setDate(number)); //Deuelve el primer día del mes de date.
}

function getFirstDayOfWeek(date) {
  //Esto es lo primero que ejecuta del código. -1-
  let firstDayOfWeek = culture.firstDayOfWeek; //Como culture es "es", culture.firstDayOfWeek es 1 (lunes) => culture.js + config.js.
  let dayOfWeek = date.getDay(); //Extrae el día de la semana (0 a 6) de date.
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
  let dif =
    dayOfWeek >= firstDayOfWeek //Si el día de la semana de date es mayor o igual que 1 (lunes a sábado).
      ? date.getDate() - dayOfWeek //Si se cumple, extrae el día del mes (0-28/29/30/31) de date y resta su día de la semana (1-6) correspondiente.
      : date.getDate() - DAYSOFWEEK; //Si no se cumple, es decir, es domingo, extrae el día del mes (0-28/29/30/31) de date y resta DAYSOFWEEK (7).
  return addDays(date, dif + firstDayOfWeek); //Vuelve a addDays, donde se sitúa en el día 1 de date y se mueve hacía atrás tantas posiciones como indique dif + firstDayOfWeek (1). -2-
}

function getDataObject(date, today) {
  return {
    //Devuelve un objeto con la fecha y las comprobaciones isToday y isMonth. -6-
    date,
    today: isToday(date, today),
    isInMonth: isInMonth(date, today),
  };
}

export function isToday(current, date) {
  return (
    //Comprueba que la fecha sea la actual. -7-
    current.getDate() === date.getDate() &&
    current.getMonth() === date.getMonth() &&
    current.getFullYear() === date.getFullYear()
  );
}

export function isInMonth(current, date) {
  return (
    //Comprueba si la fecha se encuentra en el mismo mes y año que la actual. -8-
    current.getMonth() === date.getMonth() &&
    current.getFullYear() === date.getFullYear()
  );
}

export function getMonthCalendar(date, numberDays = 42) {
  let i = 0; //Inicializa un contador a 0.
  let days = []; //Declara un array vacío para almacenar los días.
  let _date = getFirstDayOfWeek(getFirstDayOfMonth(cloneDate(date))); //Extrae el primer día de la semana que corresponde al día 1 de date. -5-
  let today = new Date(); //Inicializa el día actual. -3-
  do {
    days.push(getDataObject(cloneDate(_date), today)); //Empuja (añade al final del array) cada objeto getDataObject que se genere dentro del bucle.
    _date = addDays(_date, _date.getDate() + 1); //Aumenta el día anterior en 1 para la siguiente iteración. -9-
  } while (++i < numberDays); //Aumenta el contador en 1 y comprueba que se cumple la condición i < 42).
  return days; //Devuelve el array con los 42 días.
}

export function getNextOrPreviousMonth(date, dif) {
  let firstDayOfMonth = getFirstDayOfMonth(date);
  let newMonth = firstDayOfMonth.getMonth() + dif;
  return new Date(firstDayOfMonth.setMonth(newMonth));
}

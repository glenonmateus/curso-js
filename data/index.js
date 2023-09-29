// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix ou época unix
// console.log(data.toString());

// const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mês, dia, hora, minuto, segundo, milisegundo
const data = new Date("2019-04-20 20:20:59");
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundo", data.getSeconds());
console.log("Milisegundo", data.getMilliseconds());
console.log("Dia da semana", data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());

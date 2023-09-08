/*
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false -> vai retornar o valor verdadeiro
 *
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

// console.log("Glenon" && true && "Maria");
// console.log("Glenon" && "" && "Maria");

// function falarOI() {
//   return "oi";
// }
// const vaiExecutar = false;
// console.log(vaiExecutar && falarOI());

// console.log(0 || false || null || "Glenon" || true);

// const corUsuario = null;
const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";
console.log(corPadrao);

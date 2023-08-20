// const myArray = [];
// console.log(myArray[0]);

// undefined, no contexto booleano é tratado como false
// if (!myArray[0]) {
//   console.log(true);
// } else {
//   console.log(false);
// } // true

// undefined, no contexto numérico, é tratado como NaN
// let numero;
// console.log(numero + 2); // NaN

// variável nula, no contexto numérico, é tratado como 0
// const valorNulo = null;
// console.log(valorNulo * 100); // 0

// escopo da variável
// contexto global (var)
// if (true) {
//   var a = 5;
// }
// console.log(a);

// contexto local (let)
// if (true) {
//   const x = 10;
// }
// console.log(x);

// variável de elevação
// exemplo 1
console.log(x === undefined);
var x = 3;
// interpretado como
// var x;
// console.log(a === undefined);
// a = 3;
// exemplo 2
var myvar = "my value";
(function () {
  console.log(myvar);
  var myvar = "local value";
})();
// interpreta como
// var myvar = "my value"
// (function(){
// var myvar;
// console.log(myvar)
// myvar = "local value"
// })();

// const raiz = (numero) => numero ** 0.5;
// console.log(raiz(9));
// // const raiz = function (numero) {
// //   return numero ** 0.5;
// // };
// // console.log(raiz(9));
// // function soma(x = 1, y = 1) {
// //   const resultado = x + y;
// //   return resultado;
// // }
// // console.log(soma());
// // console.log(soma(2, 2));
// // const resultado = soma(2, 2);
// // console.log(resultado);
//
// // function saudacao(nome) {
// //   return `Bom dia ${nome}!`;
// // }
// //
// // const variavel = saudacao("Glenon");
// // console.log(variavel);
// // reunitilizar código
// // saudacao("Glenon");
// // saudacao("Maria");
//
// // Declaração de função (function hoisting)
// falaOi();
// function falaOi() {
//   console.log("oi");
// }
//
// // First-class objects (Objectos de primeira classe)
// // function expression
// const souUmDado = function () {
//   console.log("Sou um dado");
// };
//
// function executaFuncao(funcao) {
//   console.log("Vou executar a sua função");
//   funcao();
// }
// executaFuncao(souUmDado);
//
// // Arrow function
// const funcaoArrow = () => {
//   console.log("Sou uma arrow function");
// };
// funcaoArrow();
//
// // dentro do objeto
// const objeto = {
//   falar: function () {
//     console.log("Estou falando ...");
//   },
//   funcao() {
//     console.log("Estou falando ...");
//   },
// };
//
// objeto.funcao();
// objeto.falar();

// function funcao() {
//   let total = 0;
//   for (let argument of arguments) {
//     total += argument;
//   }
//   console.log(total);
// }
//
// funcao(1, 2, 3, 4, 5);
// function conta(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === "+") acumulador += numero;
//     if (operador === "-") acumulador -= numero;
//     if (operador === "/") acumulador /= numero;
//     if (operador === "*") acumulador *= numero;
//   }
//   console.log(acumulador);
// }
//
// conta("+", 0, 20, 30, 40, 50);

// return
// retorna um valor
// termina a função

// const soma = (x, y) => {
//   return x + y;
// };

// const criaPessoa = (nome, sobrenome) => {
//   // return { nome: nome, sobrenome: sobrenome }
//   return { nome, sobrenome }
// }

// const falaFrase  = (comeco) => {
//   const falaResto = (resto) => {
//     return comeco + ' ' + resto
//   }
//   return falaResto
// }

// const fala = falaFrase('olá')
// const resto = fala('mundo')
// console.log(resto)

// const duplica = (numero) => {
//   return numero * 2
// }

// const triplica = (numero) => {
//   return numero * 3
// }

// const quadriplica = (numero) => {
//   return numero * 4
// }

const criaMultiplicador = (multiplicador) => {
  return (numero) => {
    return numero * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

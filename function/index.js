const raiz = (numero) => numero ** 0.5;
console.log(raiz(9));
// const raiz = function (numero) {
//   return numero ** 0.5;
// };
// console.log(raiz(9));
// function soma(x = 1, y = 1) {
//   const resultado = x + y;
//   return resultado;
// }
// console.log(soma());
// console.log(soma(2, 2));
// const resultado = soma(2, 2);
// console.log(resultado);

// function saudacao(nome) {
//   return `Bom dia ${nome}!`;
// }
//
// const variavel = saudacao("Glenon");
// console.log(variavel);
// reunitilizar código
// saudacao("Glenon");
// saudacao("Maria");

// Declaração de função (function hoisting)
falaOi();
function falaOi() {
  console.log("oi");
}

// First-class objects (Objectos de primeira classe)
// function expression
const souUmDado = function () {
  console.log("Sou um dado");
};

function executaFuncao(funcao) {
  console.log("Vou executar a sua função");
  funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// dentro do objeto
const objeto = {
  falar: function () {
    console.log("Estou falando ...");
  },
  funcao() {
    console.log("Estou falando ...");
  },
};

objeto.funcao();
objeto.falar();

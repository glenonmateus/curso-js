// let a = "A";
// let b = "B";
// let c = "C";
//
// const letras = [b, c, a];
// [a, b, c] = letras;
//
// console.log(a, b, c);
//
// ...rest, ...spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiro, segundo, ...resto] = numeros;
// console.log(primeiro, segundo);
// console.log(resto);

// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);

// const numeros = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // console.log(numeros[1][2]);
// const [, [, , seis]] = numeros;
// console.log(seis);

const pessoa = {
  nome: "Glenon",
  sobrenome: "Araujo",
  idade: 36,
  endereco: {
    rua: "Tv Mauriti",
    numero: 1048,
  },
};

// atribuição via desestruturação
// const { nome } = pessoa;
// caso o valor não exista no objeto será atribuido o valor padrão
// const { nome = "", sobrenome } = pessoa;
// alteração do nome da variável
// const { nome: teste = "", sobrenome } = pessoa;
// const {
//   endereco: { rua, numero },
// } = pessoa;
const { nome, ...resto } = pessoa;
console.log(resto);

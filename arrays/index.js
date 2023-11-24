// const alunos = ["Glenon", "Mateus", "Barbosa", "Araujo"];
//
// console.log(typeof alunos);
// console.log(alunos instanceof Array);
// console.log(alunos.slice(0, 3));
// console.log(alunos.slice(1, 3));
// remove o elemento mantendo o indice, valor undefined
// delete alunos[1];
// remove do inicio
// const removido = alunos.shift();
// remove do final
// const removido = alunos.pop();
// adiciona no inicio
// alunos.unshift("Raysa");
// alunos.unshift("Lavareda");
// console.log(alunos);
// adiciona no final
// alunos.push("Raysa");
// alunos.push("Lavareda");
// tamanho do array
// console.log(alunos.length);
// alunos[alunos.length] = "Miriam";
// alunos[alunos.length] = "Otavio";
// alunos[alunos.length] = "Nayra";
// altera o valor no indice indicado
// alunos[0] = "Eduardo";
// alunos[4] = "Luiza";
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[1]);

// valor por referência
// const nomes = ["Eduardo", "Maria", "Joana"];
// nomes[2] = "João";
// delete nomes[2];
// const novo = nomes;
// const novo = [...nomes];
// novo.pop();
// console.log(nomes);
// console.log(novo);

// const nome = "Glenon, Mateus, Barbosa, Araújo";
// const nomes = nome.split(",");
// console.log(nomes);

// const nomes = ["Glenon", "Mateus", "Barbosa", "Araujo"];
// const nome = nomes.join(" ");
// console.log(nome);
//               -6         -5         -4        -3         -2       -1
// const nomes = ["Glenon", "Mateus", "Barbosa", "Araujo", "Maria", "Eduarda"];

// nomes.splice(indice,delete,elemento1,elemento2,elemento3)
// pop
// const removido = nomes.splice(-1, 1);
// shift
// const removido = nomes.splice(0, 1);
// push
// nomes.splice(nomes.length, 0, "Nayra");
// unshift
// nomes.splice(0, 0, "Nayra");
// console.log(nomes);

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// const a3 = a1.concat(a2);
// const a3 = a1.concat(a2, [7, 8, 9], "Glenon");
// ...rest -> spread
// const a3 = [...a1, ...a2, ...[7, 8, 9]];
// console.log(a3);

// filter, map, reduce
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
// function callbackFilter(valor) {
//   return valor > 10;
// }
// const maiores10 = numeros.filter(callbackFilter);
// const maiores10 = numeros.filter((numero) => {
//   //(numero, indice, array)
//   numero > 10;
// });
// console.log(maiores10);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((pessoa) => pessoa.nome.length > 5);
const pessoasComMais50Anos = pessoas.filter((pessoa) => pessoa.idade > 50);
const pessoasTerminaComA = pessoas.filter((pessoa) =>
  pessoa.nome.toLowerCase().endsWith("a"),
);

console.log(pessoasComNomeGrande);
console.log(pessoasComMais50Anos);
console.log(pessoasTerminaComA);

// const pessoa1 = {
//   nome: "Glenon",
//   sobrenome: "Araujo",
//   idade: 37,
// };
//
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
//
// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }
// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }
//
// const pessoa1 = criaPessoa("Glenon", "Araujo", 37);
// console.log(pessoa1);

const pessoa1 = {
  nome: "Nome",
  sobrenome: "Sobrenome",
  idade: 25,

  fala() {
    console.log(`A minha idade é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

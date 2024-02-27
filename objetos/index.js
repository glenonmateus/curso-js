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

// const pessoa1 = {
//   nome: "Nome",
//   sobrenome: "Sobrenome",
//   idade: 25,
//
//   fala() {
//     console.log(`A minha idade é ${this.idade}`);
//   },
//
//   incrementaIdade() {
//     this.idade++;
//   },
// };
//
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();

// const pessoa = {
//   nome: "Luiz",
//   sobrenome: "Otávio",
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// const chave = "nome";
// console.log(pessoa[chave]);
// console.log(pessoa["nome"]);
// console.log(pessoa["sobrenome"]);

// const pessoa = new Object();
// pessoa.nome = "Glenon";
// pessoa.sobrenome = "Mateus";
// pessoa.idade = 30;
// pessoa.falarNome = function () {
//   return `${this.nome} está falando seu nome.`;
// };
// pessoa.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };
// console.log(pessoa);
// console.log(pessoa.falarNome());
// console.log(pessoa.getDataNascimento());

// function Pessoa(nome, sobrenome) {
//   (this.nome = nome), (this.sobrenome = sobrenome);
//   // Object.freeze(this);
// }
//
// const p1 = new Pessoa("Glenon", "Mateus");
// // Object.freeze(p1);
// p1.nome = "outra coisa";
// const p2 = new Pessoa("Maria", "Eduarda");
// console.log(p1);
// console.log(p2);

// defineProperties;
// function Produto(nome, preco, estoque) {
//   Object.defineProperties(this, {
//     nome: {
//       enumerable: true,
//       value: nome,
//       writable: false,
//       configurable: false,
//     },
//     preco: {
//       enumerable: true,
//       value: preco,
//       writable: false,
//       configurable: false,
//     },
//   });
//   Object.defineProperty(this, "estoque", {
//     enumerable: true, // mostra a chave
//     value: estoque, // valor
//     writable: false, // pode alterar
//     configurable: false, // configurável
//   });
// }

// defineProperties - getters and setters
// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;
//   Object.defineProperty(this, "estoque", {
//     enumerable: true, // mostra a chave
//     configurable: false, // configurável
//     get() {
//       return this._estoque;
//     },
//     set(estoque) {
//       if (typeof estoque !== "number") throw new TypeError();
//       this._estoque = estoque;
//     },
//   });
// }
// const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 10;
// console.log(p1);
// console.log(p1.estoque);

const produto1 = {
  nome: "Caneca",
  preco: 1.8,
};
// const produto2 = {
//   ...produto1,
//   material: "porcelana",
// };
// const produto2 = Object.assign({}, produto1, { material: "porcelana" });

// produto2.nome = "Produto 2";
// console.log(produto2);
console.log(Object.keys(produto1));
console.log(Object.getOwnPropertyDescriptor(produto1, "nome"));
console.log(Object.values(produto1));
console.log(Object.entries(produto1));

/*
 Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
 
 Definição de protótipos
 Protótipos é o termo usado para se referir ao que foi criado pela primeira vez, servindo de 
 modelo ou molde para futuras produções.
 
 Todos os objetos tem um referência interna para um protótipo (__proto__) que vem da propriedade prototype
 da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro  de um objeto, primeiro
 o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada
 até o topo (null) até encontrar (ou não) o tal membro.
 */

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// Pessoa.prototype === Pessoa.__proto__

// Pessoa.prototype.nomeCompleto = function () {
//   return this.nome + " " + this.sobrenome;
// };

// const p1 = new Pessoa("Glenon", "Araujo"); // <- Pessoa = função construtora
// const data = new Data(); // <- Date = função construtora

// new Object -> Object.prototype
// const ObjectA = {
//   chaveA: "A",
//   // __proto__: Object.prototype
// };

// const ObjectB = {
//   chaveB: "B",
//   // __proto__: Object.prototype
// };

// Object.setPrototypeOf(ObjectB, ObjectA);
// console.log(ObjectB.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
console.log(p1);

// p1.desconto(50);
p1.aumento(50);

console.log(p1);

// Literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
});
p3.aumento(10);
console.log(p3);

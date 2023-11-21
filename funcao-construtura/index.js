// função construtura -> objetos
// função fabrica -> objetos
// Construtora -> Pessoa (new)

// não funciona
// const Pessoa = (nome, sobrenome) => {
//   this.nome = nome
//   this.sobrenome = sobrenome
// }

function Pessoa1(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

class Pessoa2 {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

const p1 = new Pessoa1('Glenon', 'Araújo')
const p2 = new Pessoa2('Glenon', 'Mateus')
console.log(p1, typeof p1)
console.log(p2, typeof p2)

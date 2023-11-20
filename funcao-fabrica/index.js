// factory function
// construtor de função
const criaPessoa = (nome, sobrenome, altura, peso) => {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está falando ${assunto}`
    },
    // getter
    get imc() {
      return (this.peso / (this.altura ** 2)).toFixed(2)
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // setter
    set nomeCompleto(nome) {
      nome = nome.split(' ')
      this.nome = nome.shift()
      this.sobrenome = nome.join(' ')
    }
  }
}

const p1 = criaPessoa('Glenon', 'Mateus', 1.7, 90)
console.log(p1)
p1.nomeCompleto = 'Barbosa Araújo'
console.log(p1.imc)
console.log(p1.nomeCompleto)
console.log(p1)

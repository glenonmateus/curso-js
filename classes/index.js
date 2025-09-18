// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//   falar() {
//     console.log(`${this.nome} está bebendo`);
//   }
//   comer() {
//     console.log(`${this.nome} está comendo`);
//   }
//   bebendo() {
//     console.log(`${this.nome} está bebendo`);
//   }
// }
//
// const p1 = new Pessoa("Glenon", "Araujo");
// console.log(p1);

// const _velocidade = Symbol("velocidade");
// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }
//   set velocidade(valor) {
//     if (typeof valor !== "number") return;
//     if ((valor >= 100) | (valor <= 0)) return;
//     this[_velocidade] = valor;
//   }
//   get velocidade() {
//     return this[_velocidade];
//   }
//   acelerar() {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }
//   freiar() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }
//
// const c1 = new Carro("Fusca");
//
// for (let index = 0; index < 200; index++) {
//   c1.acelerar();
// }
// c1.velocidade = 99;
// console.log(c1.velocidade);

// class DispositivoEletronico {
//   constructor(nome) {
//     console.log("Criando o dispositivo " + nome);
//     this.nome = nome;
//     this.ligado = false;
//   }
//   ligar() {
//     if (this.ligado) {
//       console.log(`${this.nome} já esta ligado`);
//       return;
//     }
//     this.ligado = true;
//   }
//   desligar() {
//     if (!this.ligado) {
//       console.log(`${this.nome} já esta desligado`);
//       return;
//     }
//     this.ligado = false;
//   }
// }
//
// class Smartphone extends DispositivoEletronico {
//   constructor(nome, cor, modelo) {
//     super(nome);
//     console.log("Criando o smartphone " + nome);
//     this.cor = cor;
//     this.modelo = modelo;
//   }
// }
//
// class Tablet extends DispositivoEletronico {
//   constructor(nome, temWifi) {
//     super(nome);
//     console.log("Criando o tablet " + nome);
//     this.temWifi = temWifi;
//   }
//   ligar() {
//     console.log("Olha, você alterou o método ligar.");
//   }
// }
//
// const t1 = new Tablet("iPad", true);
// console.log(t1);
// t1.ligar();
// t1.ligar();
//
// const s1 = new Smartphone("Iphone", "Preto", "X");
// console.log(s1);

// class ControleRemoto {
//   constructor({ volume, tv }) {
//     this.tv = tv;
//     this.volume = volume;
//   }
//   aumentarVolume() {
//     this.volume += 2;
//   }
//   diminuirVolume() {
//     this.volume -= 2;
//   }
//   static trocarPilha() {
//     console.log("Trocando pilha");
//   }
// }
//
// const c1 = new ControleRemoto({ tv: "LG", volume: 0 });
// c1.aumentarVolume();
// c1.aumentarVolume();
// ControleRemoto.trocarPilha();
// console.log(c1);

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }
}

const validaCpf = new ValidaCPF("070.987.720-03");
console.log(validaCpf);

// for (let index = 0; index < 6; index++) {
//   console.log(index);
// }
// for (let index = 0; index < 11; index++) {
//   const par = index % 2 === 0 ? "par" : "ímpar";
//   console.log(index, par);
// }
// const frutas = ["maçã", "pêra", "uva"];
// for (let index = 0; index < frutas.length; index++) {
//   console.log(frutas[index]);
// }
const frutas = ["maçã", "pêra", "uva"];

// ler os indices ou chaves do objeto
for (let index in frutas) {
  console.log(frutas[index]);
}

const pessoa = {
  nome: "Glenon",
  sobronome: "Araujo",
  idade: 30,
};

for (const key in pessoa) {
  console.log(pessoa[key]);
}

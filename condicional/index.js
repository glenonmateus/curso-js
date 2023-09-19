/*
 * Entre 0 - 11 - bom dia
 * entre 12 - 17 - boa tarde
 * entre 18 - 23 - boa noite
 *
 * if pode ser usado sozinho
 * sempre que utilizo a palavra else, preciso de um if antes
 * eu posso ter vários else ifs na checagem
 * só posso ter um else na checagem
 * podemos usar condições sem else if, utilizando apenas if e else
 */
// const hora = 50;
//
// if (hora >= 0 && hora <= 11) {
//   console.log("Bom dia");
// } else if (hora >= 12 && hora <= 17) {
//   console.log("Boa tarde");
// } else if (hora >= 18 && hora <= 23) {
//   console.log("Boa noite");
// } else {
//   console.log("Olá");
// }

// const tenhoGrana = true;
//
// if (tenhoGrana) {
//   console.log("Vou sair de casa");
// } else {
//   console.log("Não vou sair de casa");
// }

const numero = 10;

if (1 === 1) {
  console.log("Literal");
}
if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8");
} else if (numero >= 9 && numero <= 11) {
  //verdadeiro
  console.log("O número está entre 9 e 11");
} else {
  console.log("O número não está entre 0 e 11");
}

console.log("Aqui vai o resto do código");

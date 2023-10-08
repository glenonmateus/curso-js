// let index = 0;
// while (index < 11) {
//   console.log(index);
//   index++;
// }
// console.log("Segue a vida");
//
const random = (minimo, maximo) => {
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
};

const minimo = 1;
const maximo = 50;
// let rand = random(minimo, maximo);
let rand = 10;
while (rand != 10) {
  rand = random(minimo, maximo);
  console.log(rand);
}
console.log("#####");
do {
  rand = random(minimo, maximo);
  console.log(rand);
} while (rand != 10);

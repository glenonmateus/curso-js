const numeros = [1, 2, 3, 4, 5, 6];

// Continue, continua para a próxima interação
// Break, termina a interação

for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }
  console.log(numero);
  if (numero === 5) {
    console.log("5 encontrado, saindo");
    break;
  }
}
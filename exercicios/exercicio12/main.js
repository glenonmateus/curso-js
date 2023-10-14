// Escreva uma função que  recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = retorna o próprio número
// Use a função com números de 0 a 100

const fizzBuzz = (numero) => {
  if (!typeof numero === "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
};

for (let i = 0; i < 101; i++) {
  console.log(i, fizzBuzz(i));
}

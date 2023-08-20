const nome = "Glenon"; // string
const nome1 = "Glenon"; // string
const nome2 = `Glenon`; // string
const num1 = 10; // number (int)
const num2 = 2.345; // number (float)
let nomeAluno; // undefined (não aponta para local nenhum da memória)
const sobreNomeAluno = null; // Nulo (não aponta para local nenhum da memória)
const aprovado = false; // boolean (true, false) lógico

// atribuição por valor (tipos primitivos)
let a = 2;
let b = a;
console.log(a, b);

b = 3;
console.log(a, b);

// atribuição por referencia
const x = [1, 2];
const y = x;
console.log(x, y);

y.push(3);
console.log(x, y);

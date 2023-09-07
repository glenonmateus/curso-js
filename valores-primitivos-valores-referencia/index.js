/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
 * valores copiados
 */
// let nome = "Glenon";
// nome[0] = "M";
// console.log(nome[0], nome);
// let a = "A";
// let b = a; //cópia do valor
// console.log(a, b);
// a = "outra coisa";
// console.log(a, b);
/*
 * Referência (mutável) - array, object, function
 * passados por referência
 */
let a = [1, 2, 3];
let b = a; //referência da memória
let c = [...b]; // copia os valores de 'b' em 'c'
console.log(a, b);
a.push(4);
console.log(a, b);
b.pop();
console.log(a, b);
b.pop();
console.log(a, b, c);

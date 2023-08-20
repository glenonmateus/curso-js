/*
 * Luiz Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25
 * Luiz nasceu em 1930
 */

const nome = "Glenon";
const sobrenome = "Araujo";
const idade = 36;
const peso = 90;
const altura = 1.7;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);

const data = new Date();
const anoAtual = data.getFullYear();
anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log("tem", altura, "de altura e seu IMC é de", imc);
console.log(nome, "nasceu em", anoNascimento);

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

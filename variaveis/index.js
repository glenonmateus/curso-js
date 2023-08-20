// -- Regras para criação de variáveis
// não podemos criar variável com palavras reservadas
// variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com número
// Não podem conter espaços ou traços (Utilizamos camelCase, exemplo: nomeCompletoDoCliente)
// Case sensitive nomeCliente != nomecliente
// Não podemos redeclarar variáveis com let
// Não utilize var, utilize let

let nome = "João"; //string
console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012");
console.log("O filho de", nome, "se chama Eduardo");

let test = "teste"; //declarou a variável
console.log(test);
test = "Qualquer valor"; //inicializando a variável
console.log(test);

/* - Regras para criação de constantes
 * não podemos criar constantes com palavras reservadas
 * Constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constante com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase
 * Case sensitive
 * Não pode modificar o valor de uma constante
 * NÃO UTILIZE VAR, UTILIZE CONST.
 * */

const constnome = "João";
console.log(constnome);
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const segundoResultado = resultado * 2;
console.log(resultado);
console.log(segundoResultado);
console.log(typeof primeiroNumero);
console.log(typeof constnome);

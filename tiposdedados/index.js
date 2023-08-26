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

// string tem indices
let umaString = "Um texto";
console.log(umaString);
console.log("Indice 0:", umaString[0]);
console.log("Indice 9:", umaString[9]); //undefined
console.log("Indice 9:", umaString.charAt(9)); //
console.log("Concat:", umaString.concat(" em um lindo dia"));
console.log("IndexOf:", umaString.indexOf("texto")); //começa do inicio da string
console.log("lastIndexOf of:", umaString.lastIndexOf("texto")); //começa do final da string
console.log("Match:", umaString.match(/[a-z]/g));
console.log("Search:", umaString.search(/x/)); // similar ao indexOf, porém aceita expressões regulares
let outraString = "o rato roeu a roupa do rei de roma.";
console.log("Replace:", outraString.replace(/r/g, "#"));
console.log("Length:", outraString.length);
console.log("Slice:", outraString.slice(3, 6));
console.log("Slice negativo:", outraString.slice(-3)); // outraString.length - 3 (32)
console.log(outraString.slice(32));
console.log(outraString.slice(-5));
console.log("Split:", outraString.split(" "));
console.log("toUpperCase:", outraString.toUpperCase());
console.log("toLowerCase:", outraString.toLowerCase());

// const nome = "Glenon"; // string
// const nome1 = "Glenon"; // string
// const nome2 = `Glenon`; // string
// const num1 = 10; // number (int)
// const num2 = 2.345; // number (float)
// let nomeAluno; // undefined (não aponta para local nenhum da memória)
// const sobreNomeAluno = null; // Nulo (não aponta para local nenhum da memória)
// const aprovado = false; // boolean (true, false) lógico
//
// // atribuição por valor (tipos primitivos)
// let a = 2;
// let b = a;
// console.log(a, b);
//
// b = 3;
// console.log(a, b);
//
// // atribuição por referencia
// const x = [1, 2];
// const y = x;
// console.log(x, y);
//
// y.push(3);
// console.log(x, y);
//
// // string tem indices
// let umaString = "Um texto";
// console.log(umaString);
// console.log("Indice 0:", umaString[0]);
// console.log("Indice 9:", umaString[9]); //undefined
// console.log("Indice 9:", umaString.charAt(9)); //
// console.log("Concat:", umaString.concat(" em um lindo dia"));
// console.log("IndexOf:", umaString.indexOf("texto")); //começa do inicio da string
// console.log("lastIndexOf of:", umaString.lastIndexOf("texto")); //começa do final da string
// console.log("Match:", umaString.match(/[a-z]/g));
// console.log("Search:", umaString.search(/x/)); // similar ao indexOf, porém aceita expressões regulares
// let outraString = "o rato roeu a roupa do rei de roma.";
// console.log("Replace:", outraString.replace(/r/g, "#"));
// console.log("Length:", outraString.length);
// console.log("Slice:", outraString.slice(3, 6));
// console.log("Slice negativo:", outraString.slice(-3)); // outraString.length - 3 (32)
// console.log(outraString.slice(32));
// console.log(outraString.slice(-5));
// console.log("Split:", outraString.split(" "));
// console.log("toUpperCase:", outraString.toUpperCase());
// console.log("toLowerCase:", outraString.toLowerCase());

// numbers
// let num1 = 1500;
// let num2 = 2.52352123456;
// console.log(num1.toString() + num2); // concatena
// console.log(num1.toString(2)); // representação binária do número
// console.log(num2.toFixed(2));
// console.log(Number.isInteger(num1));
// let nan = num1 * "olá";
// console.log(Number.isNaN(nan));

// IEEE 754-2008
num1 = 0.7;
num2 = 0.1;

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0

// num1 = parseFloat(num1.toFixed(2));
// num1 = Number(num1.toFixed(2));
// console.log(num1);
// console.log(Number.isInteger(num1));

num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
num1 = (num1 * 100 + num2 * 100) / 100;
console.log(num1);
console.log(Number.isInteger(num1));

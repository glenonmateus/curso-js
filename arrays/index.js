// const alunos = ["Glenon", "Mateus", "Barbosa", "Araujo"];
//
// console.log(typeof alunos);
// console.log(alunos instanceof Array);
// console.log(alunos.slice(0, 3));
// console.log(alunos.slice(1, 3));
// remove o elemento mantendo o indice, valor undefined
// delete alunos[1];
// remove do inicio
// const removido = alunos.shift();
// remove do final
// const removido = alunos.pop();
// adiciona no inicio
// alunos.unshift("Raysa");
// alunos.unshift("Lavareda");
// console.log(alunos);
// adiciona no final
// alunos.push("Raysa");
// alunos.push("Lavareda");
// tamanho do array
// console.log(alunos.length);
// alunos[alunos.length] = "Miriam";
// alunos[alunos.length] = "Otavio";
// alunos[alunos.length] = "Nayra";
// altera o valor no indice indicado
// alunos[0] = "Eduardo";
// alunos[4] = "Luiza";
// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[1]);

// valor por referência
// const nomes = ["Eduardo", "Maria", "Joana"];
// nomes[2] = "João";
// delete nomes[2];
// const novo = nomes;
// const novo = [...nomes];
// novo.pop();
// console.log(nomes);
// console.log(novo);

// const nome = "Glenon, Mateus, Barbosa, Araújo";
// const nomes = nome.split(",");
// console.log(nomes);

// const nomes = ["Glenon", "Mateus", "Barbosa", "Araujo"];
// const nome = nomes.join(" ");
// console.log(nome);
//               -6         -5         -4        -3         -2       -1
const nomes = ["Glenon", "Mateus", "Barbosa", "Araujo", "Maria", "Eduarda"];

// nomes.splice(indice,delete,elemento1,elemento2,elemento3)
// pop
// const removido = nomes.splice(-1, 1);
// shift
// const removido = nomes.splice(0, 1);
// push
// nomes.splice(nomes.length, 0, "Nayra");
// unshift
nomes.splice(0, 0, "Nayra");
console.log(nomes);

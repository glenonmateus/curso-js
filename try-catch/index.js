// const soma = (x, y) => {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error(`x e y precisam ser numeros`);
//   }
//   return x + y;
// };
//
// try {
//   console.log(soma(1, 2));
//   console.log(soma("1", 2));
// } catch (error) {
//   console.log(error);
//   console.log("Alguma coisa aconteceu");
// }
//
// try {
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquivo e gerou erro");
//   console.log("Fechei o arquivo");
// } catch (err) {
//   console.log("Tratando o error");
// } finally {
//   console.log("FINALLY: Eu sempre sou executado");
// }

const retornaHora = (data) => {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

const hora = retornaHora();
console.log(hora);

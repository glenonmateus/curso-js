const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const section = document.querySelector(".container");
const div = document.createElement("div");

// for (let index = 0; index < elementos.length; index++) {
//   const { tag, texto } = elementos[index];
//   section.innerHTML += `<${tag}> ${texto}</${tag}> `;
// }

// for (let index = 0; index < elementos.length; index++) {
//   const { tag, texto } = elementos[index];
//   const tagCriada = document.createElement(tag);
//   tagCriada.innerHTML = texto;
//   div.appendChild(tagCriada);
// }
for (let index = 0; index < elementos.length; index++) {
  const { tag, texto } = elementos[index];
  const elementTag = document.createElement(tag);
  const elementText = document.createTextNode(texto);
  elementTag.appendChild(elementText);
  div.appendChild(elementTag);
}

section.appendChild(div);

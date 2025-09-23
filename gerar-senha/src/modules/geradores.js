const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(random(65, 91));

const geraMinuscula = () => String.fromCharCode(random(97, 123));

const geraNumero = () => String.fromCharCode(random(48, 58));

const simbolos = "!@#$%&*()_+-=[]{}|;:,.<>?";
const geraSimbolo = () => simbolos[random(0, simbolos.length)];

export default function geraSenha(
  quantidade,
  maiusculas,
  minusculas,
  numeros,
  simbolos,
) {
  const senha = [];
  const quantidadeN = Number(quantidade);
  for (let index = 0; index < quantidadeN; index++) {
    maiusculas && senha.push(geraMaiuscula());
    minusculas && senha.push(geraMinuscula());
    numeros && senha.push(geraNumero());
    simbolos && senha.push(geraSimbolo());
  }
  return senha.join("").slice(0, quantidadeN);
}

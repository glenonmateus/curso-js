// habilidade que a função tem de acessar o escopo léxico
const retornaFuncao = () => {
  return function() {
    return nome
  }
}

const funcao = retornaFuncao()
console.log(funcao)

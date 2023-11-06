const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// function criaTarefa(){}
const criaTarefa = (input) => {
  const li = document.createElement("li");
  li.innerText = input;
  tarefas.appendChild(li);
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
};

const limpaInput = () => {
  inputTarefa.value = "";
  inputTarefa.focus();
};

const criaBotaoApagar = (li) => {
  li.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  // botaoApagar.classList.add('apagar')
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'apagar essa tarefa')
  li.appendChild(botaoApagar)
}

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

const adicionarTarefasSalvas = () => {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)
  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa)
  }
}

inputTarefa.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('apagar')) {
    element.parentElement.remove()
    salvarTarefas()
  }
})

adicionarTarefasSalvas()

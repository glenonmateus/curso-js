const criaCalculadora = () => {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.clicaBotoes()
      this.pressionaEnter()
      this.pressionaBackspace()
    },

    pressionaBackspace() {
      document.addEventListener('keypress', (event) => {
        if (event.key === 'Backspace') {
          event.preventDefault()
          this.limpaUm()
        }
      })
    },

    pressionaEnter() {
      document.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.realizarConta()
        }
      })
    },

    clicaBotoes() {
      document.addEventListener('click', (event) => {
        const element = event.target
        if (element.classList.contains('btn-num')) {
          this.btnParaDisplay(element.innerText)
        }
        if (element.classList.contains('btn-clear')) {
          this.limpaDisplay()
        }
        if (element.classList.contains('btn-delete')) {
          this.limpaUm();
        }
        if (element.classList.contains('btn-equal')) {
          this.realizarConta();
        }
      })
    },

    realizarConta() {
      try {
        let conta = this.display.value
        conta = eval(conta)
        if (!conta) {
          alert('Conta inválida')
          return
        }
        this.display.value = conta
      } catch (error) {
        alert('Conta inválida')
        return
      }
    },

    btnParaDisplay(value) {
      this.display.value += value
    },

    limpaDisplay() {
      this.display.value = ''
    },

    limpaUm() {
      this.display.value = this.display.value.slice(0, -1);
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()

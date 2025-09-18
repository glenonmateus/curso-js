class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasValidas();
    if (camposValidos && senhasValidas) {
      alert("Formulário enviado");
      this.formulario.submit();
    }
  }
  senhasValidas() {
    let valido = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");
    if (senha.value !== repetirSenha.value) {
      this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisam ser iguais",
      );
      valido = false;
    }
    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, "Senha precisa ter entre 6 e 12 caracteres");
      valido = false;
    }
    return valido;
  }
  camposValidos() {
    let valido = true;
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }
    for (let campo of document.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" precisa ser preenchido`);
        valido = false;
      }
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valido = false;
      }
      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valido = false;
      }
    }
    return valido;
  }
  validaUsuario(campo) {
    const usuario = campo.value;
    let valido = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, `Usuário precisa ter entre 3 e 12 caracteres`);
      valido = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/)) {
      this.criaErro(campo, `Usuário precisa conter apenas letras e números`);
      valido = false;
    }
    return valido;
  }
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.criaErro(campo, `CPF inválido`);
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();

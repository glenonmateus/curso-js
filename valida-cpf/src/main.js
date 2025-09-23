import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

(function () {
  const cpf = new GeraCPF();
  const novoCpf = cpf.gerarNovoCpf();
  document.querySelector(".cpf-gerado").innerHTML = `
    ${novoCpf}
  `;
})();

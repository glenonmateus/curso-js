// const relogio = document.querySelector(".relogio");
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
//
// iniciar.addEventListener("click", (event) => {
//   const date = new Date();
//   relogio.innerHTML = date.toLocaleTimeString("pt-BR", { hour12: false });
// });
// pausar.addEventListener("click", (event) => {
//   alert("Cliquei no pausar");
// });
// zerar.addEventListener("click", (event) => {
//   alert("Cliquei no zerar");
// });

const relogio = () => {
  const criarHoraEmSegundos = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  };

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  const iniciarRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criarHoraEmSegundos(segundos);
    }, 1000);
  };

  document.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
      segundos = 0;
    }
    if (element.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciarRelogio();
    }
    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }
  });
};

relogio();

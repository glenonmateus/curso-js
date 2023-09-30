const h1 = document.querySelector(".container h1");

// const getToStringData = () => {
//   const data = new Date();
//   const mes = data.toLocaleString("default", { month: "long" });
//   const diaDaSemana = data.toLocaleString("default", { weekday: "long" });
//   const dia = data.getDate();
//   const ano = data.getFullYear();
//   const horario = data.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//
//   return `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${horario}`;
// };
// h1.innerHTML = getToStringData();

const data = new Date();
h1.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});

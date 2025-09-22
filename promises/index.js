function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") reject("BAD VALUE");
      resolve(msg);
    }, tempo);
  });
}

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", aleatorio(0, 3));
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", aleatorio(0, 3));
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", aleatorio(0, 3));
    console.log(fase3);
    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

// esperaAi("Fase 1", aleatorio(0, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi("Fase 2", aleatorio(0, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi(1111, aleatorio(0, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

// esperaAi("Fase 1", aleatorio(0, 3));
// esperaAi("Fase 2", aleatorio(0, 3));
// esperaAi("Fase 3", aleatorio(0, 3));

// Promise.all; Promise.race; Promise.resolve; Promise.reject
// const promises = [
//   "Primeiro Valor",
//   esperaAi("Fase 1", aleatorio(0, 3)),
//   esperaAi("Fase 2", aleatorio(0, 3)),
//   esperaAi("Fase 3", aleatorio(0, 3)),
//   "Outro Valor",
// ];
//
// Promise.all(promises)
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

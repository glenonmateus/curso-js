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

esperaAi("Fase 1", aleatorio(0, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Fase 2", aleatorio(0, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(1111, aleatorio(0, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// esperaAi("Fase 1", aleatorio(0, 3));
// esperaAi("Fase 2", aleatorio(0, 3));
// esperaAi("Fase 3", aleatorio(0, 3));

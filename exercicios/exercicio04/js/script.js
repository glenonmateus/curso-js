const number = 55.1234594035;
const numberTitle = document.getElementById("number");
const text = document.getElementById("text");

numberTitle.innerHTML = number;
text.innerHTML = `<p>Raiz quadrada: ${number ** 0.5}</p>`;
text.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)} </p>`;

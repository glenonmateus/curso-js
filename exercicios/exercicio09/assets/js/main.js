const paragrafos = document.querySelector(".paragrafos").querySelectorAll("p");
// const ps = paragrafos.querySelectorAll("p");
const backgroundColorBody = getComputedStyle(document.body).backgroundColor;

for (const p of paragrafos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#fff";
}

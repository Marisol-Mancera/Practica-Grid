console.log("¡Hola mundo!")

const btn = document.querySelector("#cambia-color");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);


// --- Código añadido para el menú hamburguesa ---
const buttonToggle = document.querySelector('.button-toggle');
const menu = document.querySelector('.menu');

buttonToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
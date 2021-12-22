const css = document.querySelector(".gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("bg");

const btnCopy = document.querySelector(".btn-copy")

const gradient = (event) => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  btnCopy.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background};`
};

const copy = () => {
  console.log(css.select());
}

color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);

btnCopy.addEventListener("click", copy)

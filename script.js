const css = document.querySelector(".gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const body = document.getElementById("bg");
const btnCopy = document.querySelector(".btn-copy")

// Functions

const gradient = (event) => {
  body.style.background = `linear-gradient(to right top, ${color1.value}, ${color2.value}, ${color3.value}   )`;
  btnCopy.style.background = `linear-gradient(to right top, ${color1.value}, ${color2.value}, ${color3.value} )`;
  css.textContent = `background: ${body.style.background};`
};

const copy = () => {
  textArea.remove()
  let textArea = document.createElement("textarea")
  textArea.value = css.textContent
  document.body.appendChild(textArea)
  textArea.select()
  Document.execCommand("Copy")
  textArea.remove()
}

// Event Listners

color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);

color3.addEventListener("input", gradient);

btnCopy.addEventListener("click", copy)

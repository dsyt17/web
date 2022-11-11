const board = document.querySelector("#board");
const COLORS = ["red", "blue", "orange", "green", "yellow", "pink"];
const SQUARES_NUMBERS = 10000;
// board.style.maxWidth = `${Math.sqrt(SQUARES_NUMBERS) * 100}px`;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(params) {
  const index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
}

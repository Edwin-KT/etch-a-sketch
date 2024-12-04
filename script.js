const DARK_COLOR = "#212529";

const canvas = document.querySelector(".canvas-container");
const clearButton = document.querySelector(".clear-button");
const size16Button = document.querySelector(".size16-button");
const size32Button = document.querySelector(".size32-button");
const size64Button = document.querySelector(".size64-button");
let canvasSize = 16;

clearButton.addEventListener("click", () => createCanvas(canvasSize));
size16Button.addEventListener("click", () => {
  removeSelection(canvasSize);
  canvasSize = 16;
  selectButton(canvasSize);
  createCanvas(canvasSize);
});

size32Button.addEventListener("click", () => {
  removeSelection(canvasSize);
  canvasSize = 32;
  selectButton(canvasSize);
  createCanvas(canvasSize);
});

size64Button.addEventListener("click", () => {
  removeSelection(canvasSize);
  canvasSize = 64;
  selectButton(canvasSize);
  createCanvas(canvasSize);
});

// drawing logic start
let isDrawing = false;
document.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDrawing = true;
});
document.addEventListener("mouseup", () => (isDrawing = false));
// drawing logic end

// canvas functions start
function createCanvas(size) {
  canvas.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const line = document.createElement("div");
    line.classList.add("canvas-line");
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      let squareSide = 512 / size;

      square.style.width = `${squareSide}px`;
      square.style.height = `${squareSide}px`;
      square.addEventListener("mousedown", () => {
        square.style.backgroundColor = `${currentColor}`;
      });
      square.addEventListener("mouseover", () => {
        if (isDrawing) square.style.backgroundColor = `${currentColor}`;
      });

      line.appendChild(square);
    }
    canvas.appendChild(line);
  }
}

function removeSelection(size) {
  if (size === 16) size16Button.classList.remove("button-selected");
  else if (size === 32) size32Button.classList.remove("button-selected");
  else if (size === 64) size64Button.classList.remove("button-selected");
}

function selectButton(size) {
  if (size === 16) size16Button.classList.add("button-selected");
  else if (size === 32) size32Button.classList.add("button-selected");
  else if (size === 64) size64Button.classList.add("button-selected");
}

// canvas functions end

createCanvas(canvasSize);

// color picker start
let currentColor = document.getElementById("color-picker").value;

document.getElementById("color-picker").onchange = function () {
  currentColor = this.value;
};
// color picker end

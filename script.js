const canvas = document.querySelector(".canvas-container");
const clearButton = document.querySelector(".clear-button");
const size16Button = document.querySelector(".size16-button");
const size32Button = document.querySelector(".size32-button");
const size64Button = document.querySelector(".size64-button");
let canvasSize = 16;

clearButton.addEventListener("click", () => createCanvas(canvasSize));
size16Button.addEventListener("click", () => {
  canvasSize = 16;
  createCanvas(canvasSize);
});

size32Button.addEventListener("click", () => {
  canvasSize = 32;
  createCanvas(canvasSize);
});

size64Button.addEventListener("click", () => {
  canvasSize = 64;
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
        square.style.backgroundColor = "black";
      });
      square.addEventListener("mouseover", () => {
        if (isDrawing) square.style.backgroundColor = "black";
      });

      line.appendChild(square);
    }
    canvas.appendChild(line);
  }
}

// canvas functions end

createCanvas(canvasSize);

let isDrawing = false;

document.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDrawing = true;
});
document.addEventListener("mouseup", () => (isDrawing = false));

const canvas = document.querySelector(".canvas-container");
function createCanvas(canvasSize) {
  for (let i = 0; i < canvasSize; i++) {
    const line = document.createElement("div");
    line.classList.add("canvas-line");
    for (let j = 0; j < canvasSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      let squareSide = 512 / canvasSize;

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

function clearCanvas(canvasSize) {
  canvas.innerHTML = "";
  createCanvas(canvasSize);
}

createCanvas(16);

const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => clearCanvas(16));

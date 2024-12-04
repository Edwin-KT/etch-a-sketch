let isDrawing = false;

document.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDrawing = true;
});
document.addEventListener("mouseup", () => (isDrawing = false));

function createCanvas(canvasSize) {
  const canvas = document.querySelector(".canvas-container");
  for (let i = 0; i < canvasSize; i++) {
    const line = document.createElement("div");
    line.classList.add("canvas-line");
    for (let j = 0; j < canvasSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      let squareSide = 768 / canvasSize;
      console.log(squareSide);

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

createCanvas(59);

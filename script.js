let isDrawing = false;

document.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDrawing = true;
});
document.addEventListener("mouseup", () => (isDrawing = false));

function createCanvas() {
  const canvas = document.querySelector(".canvas-container");
  for (let i = 0; i < 128; i++) {
    const line = document.createElement("div");
    line.classList.add("canvas-line");
    for (let j = 0; j < 128; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        if (isDrawing) square.style.backgroundColor = "blue";
      });

      line.appendChild(square);
    }
    canvas.appendChild(line);
  }
}

createCanvas();

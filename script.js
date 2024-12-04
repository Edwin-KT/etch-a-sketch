function createCanvas() {
  const canvas = document.querySelector(".canvas-container");
  for (let i = 0; i < 128; i++) {
    const line = document.createElement("div");
    line.classList.add("canvas-line");
    for (let j = 0; j < 128; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      line.appendChild(square);
    }
    canvas.appendChild(line);
  }
}

createCanvas();

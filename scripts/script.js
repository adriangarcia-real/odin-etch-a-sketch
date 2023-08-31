const grid = document.querySelector(".grid");

function createGrid(cells) {
  for (let i = 0; i < cells * cells; i++) {
    const box = document.createElement("div");
    box.classList.add("item");
    grid.appendChild(box);
  }

  grid.style.gridTemplateRows = `repeat(${cells}, ${520 / cells}px)`;
  grid.style.gridTemplateColumns = `repeat(${cells}, ${520 / cells}px)`;
}

function enterNormalMode() {
  const cells = document.querySelectorAll(".item");
  function changeBackgroundColor(event) {
    const cell = event.target;
    cell.style.backgroundColor = "#2f3030";
  }

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", changeBackgroundColor);

    grid.addEventListener("mousedown", () => {
      cell.addEventListener("mouseover", changeBackgroundColor);
    });

    window.addEventListener("mouseup", () => {
      cell.removeEventListener("mouseover", changeBackgroundColor);
    });
  });
}

function enterRainbowMode() {
  const cells = document.querySelectorAll(".item");
  function changeBackgroundColor(event) {
    const cell = event.target;
    const randomRed = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    cell.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
  }

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", changeBackgroundColor);

    grid.addEventListener("mousedown", () => {
      cell.addEventListener("mouseover", changeBackgroundColor);
    });

    window.addEventListener("mouseup", () => {
      cell.removeEventListener("mouseover", changeBackgroundColor);
    });
  });
}

function eraseItems() {
  const cells = document.querySelectorAll(".item");
  function changeBackgroundColor(event) {
    const cell = event.target;
    cell.style.backgroundColor = "white";
  }

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", changeBackgroundColor);

    grid.addEventListener("mousedown", () => {
      cell.addEventListener("mouseover", changeBackgroundColor);
    });

    window.addEventListener("mouseup", () => {
      cell.removeEventListener("mouseover", changeBackgroundColor);
    });
  });
}

function newGrid() {
  const cellCount = prompt(
    "How many number of squares do you want? (e.g. put 16 if you want a 16x16 grid)"
  );

  grid.innerHTML = "";

  if (cellCount > 100) return;
  createGrid(cellCount);
  enterNormalMode();
}

function clearGrid() {
  const cells = document.querySelectorAll(".item");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });

  createGrid(16);
}

createGrid(16);
enterNormalMode();

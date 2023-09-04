function createGrid(cells) {
  const grid = document.querySelector(".grid");
  for (let i = 0; i < cells * cells; i++) {
    const box = document.createElement("div");
    box.classList.add("item");
    grid.appendChild(box);
  }

  grid.style.gridTemplateRows = `repeat(${cells}, ${520 / cells}px)`;
  grid.style.gridTemplateColumns = `repeat(${cells}, ${520 / cells}px)`;
}

function changeDrawingMode(drawingMode) {
  const grid = document.querySelector(".grid");
  const cells = document.querySelectorAll(".item");

  function changeBackgroundColor(event) {
    const cell = event.target;

    // For Rainbow Mode
    const randomRed = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);

    if (drawingMode === "normal") {
      cell.style.backgroundColor = "#2f3030";
    } else if (drawingMode === "rainbow") {
      cell.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
    } else if (drawingMode === "erase") {
      cell.style.backgroundColor = "white";
    }
  }

  // Function that enables user to draw in the grid
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

function clearGrid() {
  const cells = document.querySelectorAll(".item");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function newGrid() {
  clearGrid();

  const cellCount = prompt(
    "How many number of squares do you want? (e.g. put 16 if you want a 16x16 grid)"
  );

  if (cellCount > 100) {
    createGrid(16);
  } else {
    createGrid(cellCount);
    changeDrawingMode("normal");
  }
}

function checkFirstLoad() {
  isFirstLoad = true;
  if (isFirstLoad) {
    createGrid(16);
    changeDrawingMode("normal");
    isFirstLoad = false;
  }
}

window.addEventListener("load", checkFirstLoad);

const DEFAULT_GRID_SIZE = 16;
const CONTAINER_SIZE = 960;

let gridSize = DEFAULT_GRID_SIZE;

function getRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function createGrid(gridSize) {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.style.color = "white";
    cell.style.textAlign = "center";
    cell.style.backgroundColor = "brown";

    container.appendChild(cell);
  }
}

function styleGridCells(gridSize) {
  const cells = document.getElementsByClassName("grid-item");
  const cellSize = CONTAINER_SIZE / gridSize;

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.width = cellSize + "px";
    cells[i].style.height = cellSize + "px";

    cells[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = getRandomRGBColor();
      this.style.color = "black";
    });
  }
}

function renderGrid(gridSize) {
  createGrid(gridSize);
  styleGridCells(gridSize);
}

function setupSizeButton() {
  const sizeButton = document.getElementById("button1");

  sizeButton.addEventListener("click", function () {
    let userChoice = prompt("Adjust your square size here (from 1 to 100).");

    if (userChoice === null || userChoice === "") {
      return;
    }

    userChoice = Number(userChoice);

    if (Number.isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
      return;
    }

    gridSize = userChoice;
    renderGrid(gridSize);
  });
}

function setupResetButton() {
  const resetButton = document.getElementById("button2");

  resetButton.addEventListener("click", function () {
    gridSize = DEFAULT_GRID_SIZE;
    renderGrid(gridSize);
    alert("Default size 16 by 16 created!");
  });
}

renderGrid(gridSize);
setupSizeButton();
setupResetButton();
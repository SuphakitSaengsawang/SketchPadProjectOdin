let gridSize = 16;
function makeRows(gridSize) {
  const container = document.getElementById("grid-container");
  let cell;
  for (let c = 0; c < (gridSize * gridSize); c++) {
    cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.style.color = `white`;
    cell.style.textAlign = `center`;
    cell.style.backgroundColor = `brown`
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridSize);

let boxSize = 960 / gridSize;

function squareSize(boxSize) {
  const squares = document.getElementsByClassName("grid-item");

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.width = boxSize + "px";
    squares[i].style.height = boxSize + "px";
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
      squares[i].style.backgroundColor = "white";
      squares[i].style.color = "black";
    });
  }
}

squareSize(boxSize);
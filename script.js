// creating square and Grid
let gridSize = 16;
function makeRows(gridSize) {
  const container = document.getElementById("grid-container");
  let cell;
  for (let c = 0; c < (gridSize * gridSize); c++) {
    cell = document.createElement("div");
    cell.style.color = `white`;
    cell.style.textAlign = `center`;
    cell.style.backgroundColor = `brown`
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridSize);

// Box Sizing Manipulation
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
// End of creating square and Grid & Box Sizing Manipulation

function UserInput() {
  const SizeChanger = document.getElementById("button1");

  SizeChanger.addEventListener("click", function () {
    let userChoice = prompt("Adjust your Square Size here (from 1 to 100).");

    if (userChoice === null || userChoice === "") {
      return;
    }

    userChoice = Number(userChoice);

    if (userChoice < 1 || userChoice > 100 || Number.isNaN(userChoice)) {
      return;
    }

    gridSize = userChoice;

    const container = document.getElementById("grid-container");
    container.innerHTML = "";

    makeRows(gridSize);
    squareSize(960 / gridSize);
  });
}
UserInput();
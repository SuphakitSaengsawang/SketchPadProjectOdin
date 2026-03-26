// Source - https://stackoverflow.com/a/57550587
// Posted by Nidhin Joseph, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-27, License - CC BY-SA 4.0

function makeRows(rows, cols) {
  const container = document.getElementById("grid-container");
  // set variable value on container
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let cell;
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
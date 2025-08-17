const board = document.getElementById("board");
const statusText = document.getElementById("status");

let cells = Array(9).fill("");
let current = "X";

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("click", () => handleClick(i, cell));
  board.appendChild(cell);
}

function handleClick(i, cell) {
  if (cells[i] || checkWin()) return;

  cells[i] = current;
  cell.textContent = current;
  cell.classList.add(current);

  if (checkWin()) {
    statusText.textContent = "🎉Player " + current + " wins!🎉";
  } else if (cells.every(c => c)) {
    statusText.textContent = "Draw!";
  } else {
    current = current === "X" ? "O" : "X";
    statusText.textContent = "Player " + current + "'s turn";
  }
}

function checkWin() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(([a,b,c]) => cells[a] && cells[a] === cells[b] && cells[a] === cells[c]);
}

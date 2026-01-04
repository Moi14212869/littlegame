let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");

function renderBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    if (cell === "X") div.classList.add("x");
    if (cell === "O") div.classList.add("o");
    div.textContent = cell;
    div.addEventListener("click", () => handleClick(index));
    boardElement.appendChild(div);
  });
}


function handleClick(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = currentPlayer;
  renderBoard();

  if (checkWinner(currentPlayer)) {
    messageElement.textContent = `Le joueur ${currentPlayer} a gagné !`;
    gameOver = true;
  } else if (board.every(cell => cell !== "")) {
    messageElement.textContent = "Match nul !";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner(player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // lignes
    [0,3,6], [1,4,7], [2,5,8], // colonnes
    [0,4,8], [2,4,6]           // diagonales
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === player)
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  messageElement.textContent = "";
  renderBoard();
}

renderBoard();

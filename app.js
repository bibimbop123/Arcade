const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
const board = document.querySelector("#board");
// const cell = gameState.board[i][j];
// Maybe a current Player?
const form1 = document.querySelector("#player1form");
const form2 = document.querySelector("#player2form");

const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const player1 = event.target.value;
  const newPlayer1 = player1;
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const player2 = event.target.value;
  const newPlayer2 = player2;
});

// A game status?? 'isPlaying' or 'over'
let playerStatus = document.querySelector("#playerStatus");

let currentPlayer = newPlayer1;
function switchPlayer() {}
if (currentPlayer === newPlayer1) {
  currentPlayer = newPlayer2;
  playerStatus.innerText = newPlayer2;
} else {
  currentPlayer = newPlayer1;
  playerStatus.innerText = newPlayer1;
}

let gameStatus = document.querySelector("#gameStatus");

function isPlaying() {
  if (true) {
    let statusMode = "isPlaying";
  } else {
    let statusMode = "over";
  }
}

function renderStatus() {
  const playerStatus = document.createElement("ul");
  playerStatus.appendChild(currentPlayer);
}
//i know i need to use innertext to refer to the input of currentplayer forms

// Any other data your game logic depends on?

const X_input = "X";
const O_input = "O";
Player1 = X_input;
Player2 = O_input;
//turns
//scoreboard that keeps track of score tally
//if player 1 wins +1 to his scoreboard, else if player 2 wins +1 to his scoreboard

board.addEventListener("click", function (event) {
  // Figure out how to get the coordinates off event object (e.target.value)
  // Use those coordinates to reference indexes in our gameState.board
  // Set the position in our board to the current player
  gameState.board.forEach((cell) =>
    cell.addEventListener("click", cellClicked)
  );
});
function renderStatus() {}

function renderGame() {
  // Call this function after you've changed your state values
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}

function checkRow() {}
function checkColumn(grid, x, y) {}
function checkDiagonals(grid, x, y) {}

function checkWin() {
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}
console.log(currentPlayer1);
console.log(currentPlayer2);

const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  players: ["x", "o"],
  currentPlayer: [null],
  gameStatus: [isPlaying()],
};
gameState.currentPlayer = gameState.players[0];

const board = document.querySelector("#board");
// const cell = gameState.board[i][j];
const form1 = document.querySelector("#player1form");
const form2 = document.querySelector("#player2form");

const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const player1 = event.target.value;
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const player2 = event.target.value;
});

// A game status?? 'isPlaying' or 'over'
let playerStatus = document.querySelector("#playerStatus");

let currentPlayer = player1;
function switchPlayer() {}
if ((currentPlayer = player1)) {
  currentPlayer = player2;
  playerStatus.innerText = player2;
} else {
  currentPlayer = player1;
  playerStatus.innerText = player1;
}

let gameStatus = document.querySelector("#gameStatus");

function isPlaying() {
  if (true) {
    let statusMode = "isPlaying";
  } else {
    let statusMode = "over";
  }
  gameState.gameStatus.push(statusMode);
}

function renderStatus() {
  const playerStatus = document.createElement("ul");
  playerStatus.appendChild(currentPlayer);
}
//i know i need to use innertext to refer to the input of currentplayer forms

// Any other data your game logic depends on?
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

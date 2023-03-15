const board = document.querySelector(".board");
const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");
const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");
const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
  playerNames: ["Player 1", "Player 2"],
  currentPlayeridx: 0,
  wins: { 0: 0, 1: 0 },
};
const form1 = document.querySelector("#player1form");
const playerStatus = document.querySelector("#playerStatus");
const gameStatus = document.querySelector("#gameStatus");

function renderGame() {
  board.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i}-${j}`;
      board.append(cell);
      board.append(cell);
    }
  }
}
renderGame();
board.addEventListener("click", (e) => {
  console.log(e.target.id);
  const row = e.target.id[0];
  const col = e.target.id[2];
  gameState.board[row][col] = gameState.currentPlayer;
  console.log("Game State: ", gameState);
  gameStatus.innerText = "Active";

  renderboard();

  CheckWin();
  displayScore();
  switchPlayer();
  playerStatus.innerText =
    gameState.currentPlayer === "x"
      ? gameState.playerNames[0] + "'s turn"
      : gameState.playerNames[1] + "'s turn";
});

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[0] = event.target[0].value;
  gameState.playerNames[1] = event.target[1].value;
  player1score.innerText = `${gameState.playerNames[0]}'s score: 0`;
  player2score.innerText = `${gameState.playerNames[1]}'s score: 0`;
  playerStatus.innerText = gameState.playerNames[0] + "'s turn";
});

function renderboard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell.innerText = gameState.board[i][j];
    }
  }
}
function switchPlayer() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else if (gameState.currentPlayer === "o") {
    gameState.currentPlayer = "x";
  }
  gameState.currentPlayeridx =
    (gameState.currentPlayeridx + 1) % gameState.playerNames.length;
}
function displayCurrentTime() {
  currentTimeDisplay.innerText = new Date();
}
setInterval(displayCurrentTime, 1000);
const currentTimeDisplay = document.querySelector("#current-time");

function CheckWin() {
  let hasWon = false;
  // Check rows for a win
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[i][0] !== null &&
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][1] === gameState.board[i][2]
    ) {
      hasWon = true;
    }
  }

  // Check columns for a win
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[0][i] !== null &&
      gameState.board[0][i] === gameState.board[1][i] &&
      gameState.board[1][i] === gameState.board[2][i]
    ) {
      hasWon = true;
    }
  }

  // Check diagonals for a win
  if (
    gameState.board[0][0] !== null &&
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    hasWon = true;
  }

  if (
    gameState.board[0][2] !== null &&
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    hasWon = true;
  } else {
    gameStatus.innerText = "it's a tie! or not over";
  }
  if (hasWon) {
    let playerName = gameState.playerNames[gameState.currentPlayeridx];
    gameStatus.innerText = `${playerName}'s wins`;
    gameState.wins[gameState.currentPlayeridx]++;

    resetGame();
  }
  // If no winning combinations are found, return tie
}

function displayScore() {
  player1score.innerText = `${gameState.playerNames[0]} score is ${gameState.wins[0]}`;
  player2score.innerText = `${gameState.playerNames[1]} score is ${gameState.wins[1]}`;
}

reset.addEventListener("click", (event) => {
  resetGame();
});

function resetGame() {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  renderGame();
}

resetScoreboard.addEventListener("click", (event) => {
  player1score.innerText = `${gameState.playerNames[0]}'s score: 0`;
  player2score.innerText = `${gameState.playerNames[1]}'s score: 0`;
  gameState.wins[0] = 0;
  gameState.wins[1] = 0;
});

// const board = document.querySelector(".board");
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.id = `${i}-${j}`;
//     board.append(cell);
//   }
// }

// let gameState = {
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   // Maybe a current Player?
//   // A game status?? 'isPlaying' or 'over'
//   // Any other data your game logic depends on?
// };

// const board = document.querySelector(".board");
// board.addEventListener("click", function (event) {
//   console.log(event.target);
//   // Figure out how to get the coordinates off event object (e.target.value)
//   // Use those coordinates to reference indexes in our gameState.board
//   // Set the position in our board to the current player
// });

// function renderGame() {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const cell = document.createElement("div");
//       cell.id = "${i}-${j}";
//       board.append(cell);
//     }
//     board.append.cell;
// }
// // Call this function after you've changed your state values
// // Make references to DOM elements, and set the innerText,
// // or innerHTML to reflect our gameState.board

// function switchPlayer() {
//   // ???
// }

// function checkWin() {
// Maybe this calls other helper functions?
// checkRow()
// checkColumn()
// checkDiagonals()
// }

//got to get form to submit player names into player turns on player status
//got to get game status to display who won at the end of the game
//check win function
//scoreboard function tally wins
// reset button

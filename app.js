const board = document.querySelector(".board");
const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");
const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "x",
  playerNames: ["Player 1", "Player 2"],
};
const form1 = document.querySelector("#player1form");
const playerStatus = document.querySelector("#playerStatus");
const gameStatus = document.querySelector("#gameStatus");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}

board.addEventListener("click", (e) => {
  console.log(e.target.id);
  const row = e.target.id[0];
  const col = e.target.id[2];
  gameState.board[row][col] = gameState.currentPlayer;
  console.log("Game State: ", gameState);

  renderboard();
  switchPlayer();
  playerStatus.innerText =
    gameState.currentPlayer === "x"
      ? gameState.playerNames[0] + "'s turn"
      : gameState.playerNames[1] + "'s turn";
  gameStatus.innerText = "Active";
});

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[0] = event.target[0].value;
  gameState.playerNames[1] = event.target[1].value;
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
}
function displayCurrentTime() {
  currentTimeDisplay.innerText = new Date();
}
setInterval(displayCurrentTime, 1000);
const currentTimeDisplay = document.querySelector("#current-time");


function getRow(){
for(let i =0; i<gameState.board.length;i++){
  let rowEl= gameState.board[i]
  for(j=0;j<rowEl.length;i++){
    let colEl=rowEl[j]

  }
}
}
function getCol(){

}
function checkWin(){

// }
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

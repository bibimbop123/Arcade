const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  players: ["x", "o"],
  playerNames: [[], []],
  currentPlayerIdx: 0,
  gameStatus: "isPlaying",
};

const board = document.querySelector(".board");

board.addEventListener("click", (event) => {
  let coordinates = event.target.id.split("");
  console.log(coordinates);
  const i = Number(coordinates[0]);
  const j = Number(coordinates[1]);

  //   // WHat are we trying to do when we click on the board???
  //   //change null to x or
  board.innerHTML = null;
  renderGame();
  switchPlayer();
  //   // figure out how to use the id to set the gameState.board's correct positon to be the current player
  // gameState.board[i][j] = gameState.players[0];
  //   // check for win
  //   // switch the current player
  //   function switchPlayer() {
  //     //event listen on the board, specific part of the board, player 1 turn then make square x
  //     if ((gameState.board[i][j] = gameState.players[0])) {
  //       gameState.board[i][j] = gameState.players[1];
  //     } else if ((gameState.board[i][j] = gameState.players[1])) {
  //       gameState.board[i][j] = gameState.players[0];
  //     }
  //   }
  //   // change the currentPlayer Idx
});
// const cell = gameState.board[i][j];
const form1 = document.querySelector("#player1form");
const form2 = document.querySelector("#player2form");

const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[0].push(event.target[0].value);
  playerStatus.append.playerNames[0];
  // push this players name into postiton 0 of the payerName array
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[1].push(event.target[0].value);
  playerStatus.append.playerName[1];
  // push this players name into postiton 1 of the payerName array
});

// A game status?? 'isPlaying' or 'over'
let playerStatus = document.querySelector("#playerStatus");

let gameStatus = document.querySelector("#gameStatus");

function switchPlayer() {
  let currentIdx = gameState.players.indexOf(gameState.currentPlayerIdx);
  let nextIdx = (currentIdx + 1) % gameState.players.length;
  gameState.currentPlayerIdx = gameState.players[nextIdx];
  console.log(gameState.currentPlayerIdx);
  gameState.board.appendChild(gameState.currentPlayerIdx);
}

function renderStatus() {
  const playerStatus = document.createElement("ul");
  playerStatus.append(playerNames[0]);
}
//i know i need to use innertext to refer to the input of currentplayer forms

// Any other data your game logic depends on?
//turns
//scoreboard that keeps track of score tally
//if player 1 wins +1 to his scoreboard, else if player 2 wins +1 to his scoreboard

function renderGame() {
  console.log("hit");
  // Call this function after you've changed your state values
  for (let i = 0; i < gameState.board.length; i++) {
    let rowEl = gameState.board[i];
    for (let j = 0; j < gameState.board[i].length; j++) {
      let columnEl = gameState.board[j];
      let square = document.createElement("div");
      square.innerText = gameState.board[i][j];
      square.id = `${i}${j}`;
      square.className = "cell";
      board.appendChild(square);
    }
  }
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}
renderGame();
function checkRow(grid, i, j) {}
function checkColumn(grid, i, j) {}
function checkDiagonals(grid, i, j) {}

function checkWin() {
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}

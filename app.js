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

board.addEventListener("click", (e) => {

  // WHat are we trying to do when we click on the board???
  //change null to x or o

  console.log(e.target.id);
  // figure out how to use the id to set the gameState.board's correct positon to be the current player
  gameState.board[i][j] = gameState.players[0];

  // check for win

  // switch the current player
  function switchPlayer() {
    if (gameState.board[i][j]=gameState.players[0]) {
      gameState.board[i][j]=gameState.players[1]
    } else if (gameState.board[i][j]=gameState.players[1]){
      gameState.board[i][j]=gameState.players[0]
    }
  }
  // change the currentPlayer Idx
});
// const cell = gameState.board[i][j];
const form1 = document.querySelector("#player1form");
const form2 = document.querySelector("#player2form");

const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[0].push(event.target[0].value);
  // push this players name into postiton 0 of the payerName array
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[1].push(event.target[0].value);
  // push this players name into postiton 1 of the payerName array
});

// A game status?? 'isPlaying' or 'over'
let playerStatus = document.querySelector("#playerStatus");

let gameStatus = document.querySelector("#gameStatus");

function renderStatus() {
  const playerStatus = document.createElement("ul");
  playerStatus.append(playerNames);
}
//i know i need to use innertext to refer to the input of currentplayer forms

// Any other data your game logic depends on?
//turns
//scoreboard that keeps track of score tally
//if player 1 wins +1 to his scoreboard, else if player 2 wins +1 to his scoreboard

function renderGame() {
  // Call this function after you've changed your state values
  for(let i = 0, i < gameState.board[i].length; i++){
    let rowEl = gameState.board[i]
    for(let j =0, i < gameState.board[j].length;j++){
      let columnEl = gameState.board[j]
    }
  }
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}

function checkRow(grid, i, j) {}
function checkColumn(grid, i, j) {}
function checkDiagonals(grid, i, j) {}

function checkWin() {
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}

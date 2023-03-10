//have to create a reset button that resets the tallys to zero
//have to create a scoreboard that tallys the win
// have to get it to say the players name when they win
let game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let playerNames = ["player1", "player2"];
let playerStatus = document.querySelector("#playerStatus");
playerStatus.innerText = playerNames[0];

let isX = true;

function player() {
  for (i = 0; i < playerNames.length; i++) {
    let player = playerNames[i];
    if (isX) {
      return (player = playerNames[0]);
    } else {
      return (player = playerNames[1]);
    }
  }
}

function switchPlayers() {
  if (isX) {
    playerStatus.innerText = playerNames[0] + `'s turn`;
  } else {
    playerStatus.innerText = playerNames[1] + `'s turn`;
  }
}
function buttonClick(x, y, selector) {
  if (game[y][x] != "") return;

  game[y][x] = isX ? "X" : "O";
  isX = !isX;

  let result = checkWinOrTie();

  if (result != null)
    document.querySelector("#gameStatus").innerHTML =
      "winning player is - " + checkWinOrTie() + " " + player();
  document.querySelector("#" + selector).innerHTML = game[y][x];
  switchPlayers();
}

function checkWinOrTie() {
  // Top Horizontal
  if (game[0][0] == game[0][1] && game[0][1] == game[0][2] && game[0][0] != "")
    return game[0][0];
  //middle Horizontal
  if (game[0][1] == game[1][1] && game[1][1] == game[2][1] && game[0][1] != "")
    return game[0][1];
  //bottom horizontal
  if (game[0][2] == game[1][2] && game[1][2] == game[2][2] && game[0][2] != "")
    return game[0][2];
  //left vertical
  if (game[0][0] == game[1][0] && game[1][0] == game[2][0] && game[0][0] != "")
    return game[0][0];
  // middle vertical
  if (game[1][0] == game[1][1] && game[1][1] == game[1][2] && game[1][0] != "")
    return game[1][0];
  //right vertical
  if (game[2][0] == game[2][1] && game[2][1] == game[2][2] && game[2][0] != "")
    return game[2][0];
  //right diagonal
  if (game[2][0] == game[1][1] && game[1][1] == game[0][2] && game[2][0] != "")
    return game[2][0];
  //left diagonal
  if (game[0][0] == game[1][1] && game[1][1] == game[2][2] && game[0][0] != "")
    return game[0][0];
  else {
    return (document.querySelector("#gameStatus").innerHTML = "Tie");
  }
}

// STUB - Other 5 Options

//   // switch the current player
//   // change the currentPlayer Idx
// const cell = gameState.board[i][j];
const form1 = document.querySelector("#player1form");
const form2 = document.querySelector("#player2form");

const player1 = document.querySelector("#player1-name");
const player2 = document.querySelector("#player2-name");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  playerNames[0] = event.target[0].value;
  playerNames[1] = event.target[1].value;
  playerStatus.innerText = `${playerNames[0]}'s turn`;
  // document.querySelector("#playerStatus").append(playerNames[1]);
});

// form2.addEventListener("submit", (event) => {
//   event.preventDefault();
//   playerNames[1]=(event.target[1].value);
//   document.querySelector("#playerStatus").append.playerName[1];
// });

// A game status?? 'isPlaying' or 'over'
// let playerStatus = document.querySelector("#playerStatus");

// let gameStatus = document.querySelector("#gameStatus");

// function renderStatus() {
//   const playerStatus = document.createElement("ul");
//   playerStatus.append(playerNames[0]);
// }

// Any other data your game logic depends on?
//turns
//scoreboard that keeps track of score tally
//if player 1 wins +1 to his scoreboard, else if player 2 wins +1 to his scoreboard

// Make references to DOM elements, and set the innerText,
// or innerHTML to reflect our gameState.board
// }

// renderGame();
// function checkRow(grid, i, j) {}
// function checkColumn(grid, i, j) {}
// function checkDiagonals(grid, i, j) {}

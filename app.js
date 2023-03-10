const board = document.querySelector(".board");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("div)");
    cell.classList.add("cell");
    cell.id = `${i}-${j}`;
    board.append(cell);
  }
}
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
//   // Maybe this calls other helper functions?
//   // checkRow()
//   // checkColumn()
//   // checkDiagonals()
// }

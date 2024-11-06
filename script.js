let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("resetButton");
// let colorButtons = document.querySelectorAll(".colorButton");

// initializing the Boolean for players turn
let playerTurn0 = true; //For player-X or player-O

//Storing the playerTurn in  2D Array
const winingPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [7, 6, 8],
];

// // Function to change the background color of a box
// function changeBackgroundColor(box, color) {
//   box.style.backgroundColor = color;
// }
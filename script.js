
let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("resetButton");
let playerTurn = true; // true for Player X, false for Player O
const winingPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkWinner() {
  for (let pattern of winingPatterns) {
    let [a, b, c] = pattern;
    if (
      boxes[a].innerText !== "" &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      return boxes[a].innerText; // Return the winner (X or O)
    }
  }
  return null;
}

function isDraw() {
  return Array.from(boxes).every((box) => box.innerText !== "");
}

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("disabled");
  });
  playerTurn = true;
}

// Event listeners for boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = playerTurn ? "X" : "O";
      box.classList.add("disabled");

      let winner = checkWinner();
      if (winner) {
        setTimeout(() => alert(`${winner} wins!`), 100);
        boxes.forEach((b) => b.classList.add("disabled"));
      } else if (isDraw()) {
        setTimeout(() => alert("It's a draw!"), 100);
      } else {
        playerTurn = !playerTurn; // Switch turn
      }
    }
  });
});

// Event listener for reset button
resetButton.addEventListener("click", resetGame);
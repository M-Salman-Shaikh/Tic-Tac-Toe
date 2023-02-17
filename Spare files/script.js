let gameoverStatement = false;
let turn = "X";

console.log(
  "Welcome to tic tac toe and you know what it's created by fahad shaikh "
);

// Function to check the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Funtion to check the win

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      gameoverStatement = true;
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " won";
    }
  });
};

// Game Logic

let boxes = document.getElementsByClassName("boxOfSpan");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameoverStatement) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
      //   Here we can play a audio for new turn - But now we have no audio
    }
  });
});

// reset on click

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxText");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
    turn = "X";
    gameoverStatement = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;X
  });
});

console.log("Welcome to tic tac toe");

let turnMusic = new Audio("../music/ting.mp3");
let gameover = new Audio("../music/gameover.mp3");
let gameoverS = false;

let turn = "X";

// The function to change turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// The function to check win

const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
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
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      gameoverS = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!gameoverS) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// The event listener for the reset btn

reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
  });
  gameoverS = false;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});

//  Creating Music
let music = new Audio("./assets/music.mp3");
let ting = new Audio("./assets/ting.mp3");
let gameOver = new Audio("./assets/gameover.mp3");
let winningSound = new Audio("./assets/winning.mp3");
let newGame = new Audio("./assets/newgame.wav");

let turn = "X";
let isGameOver = false;

// Function For Change the Turn

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// function to chechk Win

const chechkWin = () => {
  let signBoxes = document.getElementsByClassName("Xbox");
  let winningPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningPossibilities.forEach((e) => {
    if (
      signBoxes[e[0]].innerText === signBoxes[e[1]].innerText &&
      signBoxes[e[2]].innerText === signBoxes[e[1]].innerText &&
      signBoxes[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        "Hurray!! " + signBoxes[e[0]].innerText + " Win😍";
      isGameOver = true;
      document
        .querySelector(".imagebox")
        .getElementsByTagName("img")[0].style.width = "70px";
      winningSound.play();
    }
  });
};

// Main Concept Of the Game

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let signBox = element.querySelector(".Xbox");

  //  adding EventListener
  element.addEventListener("click", () => {
    if (signBox.innerText === "") {
      signBox.innerText = turn;
      turn = changeTurn();
      ting.play();
      chechkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          " Start With " + turn;
      }
    }
  });
});

// Add onclick listner on  reset button
document.getElementById("reset").addEventListener("click", (e) => {
  let boxes = document.querySelectorAll(".Xbox");
  Array.from(boxes).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document
    .querySelector(".imagebox")
    .getElementsByTagName("img")[0].style.width = "0";
  winningSound.pause();
  newGame.play();
  if (!isGameOver) {
    document.getElementsByClassName("info")[0].innerText =
      " Start With " + turn;
  }
});

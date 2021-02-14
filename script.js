"use strict";

// VARIABLES

const body = document.querySelector("body");
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
const instructions = document.querySelector("h4");
const turnSign = document.querySelector("h2");
const players = ["Frog", "Mouse"];
let currentPlayer;
let playCount;
let frogPoints;
let mousePoints;

const img1 = document.querySelector(".sq1-img");
const img2 = document.querySelector(".sq2-img");
const img3 = document.querySelector(".sq3-img");
const img4 = document.querySelector(".sq4-img");
const img5 = document.querySelector(".sq5-img");
const img6 = document.querySelector(".sq6-img");
const img7 = document.querySelector(".sq7-img");
const img8 = document.querySelector(".sq8-img");
const img9 = document.querySelector(".sq9-img");

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

let img1Taken;
let img2Taken;
let img3Taken;
let img4Taken;
let img5Taken;
let img6Taken;
let img7Taken;
let img8Taken;
let img9Taken;

const lineA = document.querySelector("#game-line-a");
const lineB = document.querySelector("#game-line-b");
const lineC = document.querySelector("#game-line-c");
const lineD = document.querySelector("#game-line-d");
const lineE = document.querySelector("#game-line-e");
const lineF = document.querySelector("#game-line-f");
const lineG = document.querySelector("#game-line-g");
const lineH = document.querySelector("#game-line-h");
const lineI = document.querySelector("#game-line-i");
const lineJ = document.querySelector("#game-line-j");
const lineK = document.querySelector("#game-line-k");
const lineL = document.querySelector("#game-line-l");
const lineM = document.querySelector("#game-line-m");
const lineN = document.querySelector("#game-line-n");
const lineO = document.querySelector("#game-line-o");
const lineP = document.querySelector("#game-line-p");
const lineQ = document.querySelector("#game-line-q");
const lineR = document.querySelector("#game-line-r");
const lineS = document.querySelector("#game-line-s");
const lineT = document.querySelector("#game-line-t");
const lineU = document.querySelector("#game-line-u");
const lineV = document.querySelector("#game-line-v");
const lineW = document.querySelector("#game-line-w");
const lineX = document.querySelector("#game-line-x");

const allLines = [lineA, lineB, lineC, lineD, lineE, lineF, lineG, lineH, lineI, lineJ, lineK, lineL,
                  lineM, lineN, lineO, lineP, lineQ, lineR, lineS, lineT, lineU, lineV, lineW, lineX];

const frogNoise = new Audio("Frog.mp3");
const mouseNoise = new Audio("Mouse.mp3");
const triumphNoise = new Audio("Triumph.mp3");



// STATES

const original = function() {
  body.style.background = "linear-gradient(to right, #0ed900, #278de6)";
  resetButton.classList.add("button-disabled");
  resetButton.disabled = true;
  startButton.classList.remove("button-disabled");
  startButton.disabled = false;
  turnSign.classList.add("hidden");
  instructions.classList.remove("hidden");
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].classList.add("hidden");
  }
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].src = "";
  }
  img1Taken = false;
  img2Taken = false;
  img3Taken = false;
  img4Taken = false;
  img5Taken = false;
  img6Taken = false;
  img7Taken = false;
  img8Taken = false;
  img9Taken = false;
  for (let i = 0; i < allLines.length; i++) {
    allLines[i].disabled = true;
  }
  for (let i = 0; i < allLines.length; i++) {
    allLines[i].classList.remove("chosen");
  }
  playCount = 0;
  frogPoints = 0;
  mousePoints = 0;
}

const switchPlayer = function() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  turnSign.textContent = `${currentPlayer}'s turn`;
}

const checkWinner = function() {
  if (frogPoints > mousePoints) {
    body.style.background = "#0ed900";
    turnSign.textContent = "Frog Wins!";
  } else {
    body.style.background = "#278de6";
    turnSign.textContent = "Mouse Wins!"
  }
  triumphNoise.play();
}

const conquer = function () {
  if (currentPlayer == players[0]) {
    if (playCount == 24) {
      frogPoints++;
    } else {
      frogNoise.play();
      frogPoints++;
    }
  } else {
    if (playCount == 24) {
      mousePoints++
    } else {
      mouseNoise.play();
      mousePoints++;
    }
  }
}

const checkForConquer = function() {
  playCount++;
  if (lineA.disabled === true && lineN.disabled === true && lineD.disabled === true && lineM.disabled === true && img1Taken === false) {
    img1.src = `${currentPlayer}.png`;
    img1Taken = true;
    conquer();
  }
  if (lineB.disabled === true && lineO.disabled === true && lineE.disabled === true && lineN.disabled === true && img2Taken === false) {
    img2.src = `${currentPlayer}.png`;
    img2Taken = true;
    conquer();
  }
  if (lineC.disabled === true && lineP.disabled === true && lineF.disabled === true && lineO.disabled === true && img3Taken === false) {
    img3.src = `${currentPlayer}.png`;
    img3Taken = true;
    conquer();
  }
  if (lineD.disabled === true && lineR.disabled === true && lineG.disabled === true && lineQ.disabled === true && img4Taken === false) {
    img4.src = `${currentPlayer}.png`;
    img4Taken = true;
    conquer();
  }
  if (lineE.disabled === true && lineS.disabled === true && lineH.disabled === true && lineR.disabled === true && img5Taken === false) {
    img5.src = `${currentPlayer}.png`;
    img5Taken = true;
    conquer();
  }
  if (lineF.disabled === true && lineT.disabled === true && lineI.disabled === true && lineS.disabled === true && img6Taken === false) {
    img6.src = `${currentPlayer}.png`;
    img6Taken = true;
    conquer();
  }
  if (lineG.disabled === true && lineV.disabled === true && lineJ.disabled === true && lineU.disabled === true && img7Taken === false) {
    img7.src = `${currentPlayer}.png`;
    img7Taken = true;
    conquer();
  }
  if (lineH.disabled === true && lineW.disabled === true && lineK.disabled === true && lineV.disabled === true && img8Taken === false) {
    img8.src = `${currentPlayer}.png`;
    img8Taken = true;
    conquer();
  }
  if (lineI.disabled === true && lineX.disabled === true && lineL.disabled === true && lineW.disabled === true && img9Taken === false) {
    img9.src = `${currentPlayer}.png`;
    img9Taken = true;
    conquer();
  }
  if (playCount == 24) {
    checkWinner();
  } else {
    switchPlayer();
  }
}



// ORIGINAL

original();



// BUTTONS

startButton.addEventListener("click", function() {
  startButton.classList.add("button-disabled");
  startButton.disabled = true;
  resetButton.classList.remove("button-disabled");
  resetButton.disabled = false;
  currentPlayer = players[(Math.floor(Math.random()*2))];
  turnSign.textContent = `${currentPlayer}'s turn`;
  turnSign.classList.remove("hidden");
  instructions.classList.add("hidden");
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].classList.remove("hidden");
  }
  for (let i = 0; i < allLines.length; i++) {
    allLines[i].disabled = false;
  }

})

resetButton.addEventListener("click", function() {
  original();
})



// GAMEPLAY

for (let i = 0; i < allLines.length; i++) {
  allLines[i].addEventListener("click", function() {
    allLines[i].classList.add("chosen");
    allLines[i].disabled = true;
    checkForConquer();
  })
}

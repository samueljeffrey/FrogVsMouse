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
  img1.classList.add("hidden");
  img2.classList.add("hidden");
  img3.classList.add("hidden");
  img4.classList.add("hidden");
  img5.classList.add("hidden");
  img6.classList.add("hidden");
  img7.classList.add("hidden");
  img8.classList.add("hidden");
  img9.classList.add("hidden");
  img1.src = "";
  img2.src = "";
  img3.src = "";
  img4.src = "";
  img5.src = "";
  img6.src = "";
  img7.src = "";
  img8.src = "";
  img9.src = "";
  img1Taken = false;
  img2Taken = false;
  img3Taken = false;
  img4Taken = false;
  img5Taken = false;
  img6Taken = false;
  img7Taken = false;
  img8Taken = false;
  img9Taken = false;
  lineA.disabled = true;
  lineB.disabled = true;
  lineC.disabled = true;
  lineD.disabled = true;
  lineE.disabled = true;
  lineF.disabled = true;
  lineG.disabled = true;
  lineH.disabled = true;
  lineI.disabled = true;
  lineJ.disabled = true;
  lineK.disabled = true;
  lineL.disabled = true;
  lineM.disabled = true;
  lineN.disabled = true;
  lineO.disabled = true;
  lineP.disabled = true;
  lineQ.disabled = true;
  lineR.disabled = true;
  lineS.disabled = true;
  lineT.disabled = true;
  lineU.disabled = true;
  lineV.disabled = true;
  lineW.disabled = true;
  lineX.disabled = true;
  lineA.classList.remove("chosen");
  lineB.classList.remove("chosen");
  lineC.classList.remove("chosen");
  lineD.classList.remove("chosen");
  lineE.classList.remove("chosen");
  lineF.classList.remove("chosen");
  lineG.classList.remove("chosen");
  lineH.classList.remove("chosen");
  lineI.classList.remove("chosen");
  lineJ.classList.remove("chosen");
  lineK.classList.remove("chosen");
  lineL.classList.remove("chosen");
  lineM.classList.remove("chosen");
  lineN.classList.remove("chosen");
  lineO.classList.remove("chosen");
  lineP.classList.remove("chosen");
  lineQ.classList.remove("chosen");
  lineR.classList.remove("chosen");
  lineS.classList.remove("chosen");
  lineT.classList.remove("chosen");
  lineU.classList.remove("chosen");
  lineV.classList.remove("chosen");
  lineW.classList.remove("chosen");
  lineX.classList.remove("chosen");
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
  img1.classList.remove("hidden");
  img2.classList.remove("hidden");
  img3.classList.remove("hidden");
  img4.classList.remove("hidden");
  img5.classList.remove("hidden");
  img6.classList.remove("hidden");
  img7.classList.remove("hidden");
  img8.classList.remove("hidden");
  img9.classList.remove("hidden");
  lineA.disabled = false;
  lineB.disabled = false;
  lineC.disabled = false;
  lineD.disabled = false;
  lineE.disabled = false;
  lineF.disabled = false;
  lineG.disabled = false;
  lineH.disabled = false;
  lineI.disabled = false;
  lineJ.disabled = false;
  lineK.disabled = false;
  lineL.disabled = false;
  lineM.disabled = false;
  lineN.disabled = false;
  lineO.disabled = false;
  lineP.disabled = false;
  lineQ.disabled = false;
  lineR.disabled = false;
  lineS.disabled = false;
  lineT.disabled = false;
  lineU.disabled = false;
  lineV.disabled = false;
  lineW.disabled = false;
  lineX.disabled = false;

})

resetButton.addEventListener("click", function() {
  original();
})



// GAMEPLAY

lineA.addEventListener("click", function() {
  lineA.classList.add("chosen");
  lineA.disabled = true;
  checkForConquer();
})

lineB.addEventListener("click", function() {
  lineB.classList.add("chosen");
  lineB.disabled = true;
  checkForConquer();
})

lineC.addEventListener("click", function() {
  lineC.classList.add("chosen");
  lineC.disabled = true;
  checkForConquer();
})

lineD.addEventListener("click", function() {
  lineD.classList.add("chosen");
  lineD.disabled = true;
  checkForConquer();
})

lineE.addEventListener("click", function() {
  lineE.classList.add("chosen");
  lineE.disabled = true;
  checkForConquer();
})

lineF.addEventListener("click", function() {
  lineF.classList.add("chosen");
  lineF.disabled = true;
  checkForConquer();
})

lineG.addEventListener("click", function() {
  lineG.classList.add("chosen");
  lineG.disabled = true;
  checkForConquer();
})

lineH.addEventListener("click", function() {
  lineH.classList.add("chosen");
  lineH.disabled = true;
  checkForConquer();
})

lineI.addEventListener("click", function() {
  lineI.classList.add("chosen");
  lineI.disabled = true;
  checkForConquer();
})

lineJ.addEventListener("click", function() {
  lineJ.classList.add("chosen");
  lineJ.disabled = true;
  checkForConquer();
})

lineK.addEventListener("click", function() {
  lineK.classList.add("chosen");
  lineK.disabled = true;
  checkForConquer();
})

lineL.addEventListener("click", function() {
  lineL.classList.add("chosen");
  lineL.disabled = true;
  checkForConquer();
})

lineM.addEventListener("click", function() {
  lineM.classList.add("chosen");
  lineM.disabled = true;
  checkForConquer();
})

lineN.addEventListener("click", function() {
  lineN.classList.add("chosen");
  lineN.disabled = true;
  checkForConquer();
})

lineO.addEventListener("click", function() {
  lineO.classList.add("chosen");
  lineO.disabled = true;
  checkForConquer();
})

lineP.addEventListener("click", function() {
  lineP.classList.add("chosen");
  lineP.disabled = true;
  checkForConquer();
})

lineQ.addEventListener("click", function() {
  lineQ.classList.add("chosen");
  lineQ.disabled = true;
  checkForConquer();
})

lineR.addEventListener("click", function() {
  lineR.classList.add("chosen");
  lineR.disabled = true;
  checkForConquer();
})

lineS.addEventListener("click", function() {
  lineS.classList.add("chosen");
  lineS.disabled = true;
  checkForConquer();
})

lineT.addEventListener("click", function() {
  lineT.classList.add("chosen");
  lineT.disabled = true;
  checkForConquer();
})

lineU.addEventListener("click", function() {
  lineU.classList.add("chosen");
  lineU.disabled = true;
  checkForConquer();
})

lineV.addEventListener("click", function() {
  lineV.classList.add("chosen");
  lineV.disabled = true;
  checkForConquer();
})

lineW.addEventListener("click", function() {
  lineW.classList.add("chosen");
  lineW.disabled = true;
  checkForConquer();
})

lineX.addEventListener("click", function() {
  lineX.classList.add("chosen");
  lineX.disabled = true;
  checkForConquer();
})

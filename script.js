const choices = ["ROCK", "PAPER", "SCISSORS"];

const body = document.querySelector("body");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicesDiv = document.querySelector(".choices");

const div = document.createElement("div");
const scoreHuman = document.createElement("p");
const scoreComputer = document.createElement("p");

// add a class to the Div to centre it
div.classList.add("result");

// add the div to the body
body.appendChild(div);

var humanScore = 0;
var computerScore = 0;

let getComputerChoice = function () {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = choices[random];
  return computerChoice;
};

// not used longer. Kept for legacy reasons
let getHumanChoice = function () {
  let humanChoice = prompt(
    `Enter a choice for rock, paper or scissors`
  ).toUpperCase();
  if (choices.includes(humanChoice) == false) {
    alert("invalid input. try again");
    getHumanChoice();
  }
  return humanChoice;
};

let playRound = function (humanChoice, computerChoice) {
  // if the score is already 5 or more, we want to alert the player and reload the page so they can start again
  if (humanScore >= 5 || computerScore >= 5) {
    alert("only 5 rounds to win");
    location.reload();
  }

  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    div.innerText = "";
    humanScore += 1;
    div.innerText = `Human wins. ${humanChoice} beats ${computerChoice}`;
    body.appendChild(scoreHuman);
    body.appendChild(scoreComputer);
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    div.innerText = "";
    humanScore += 1;
    div.innerText = `Human wins. ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    div.innerText = "";
    humanScore += 1;
    div.innerText = `Human wins. ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === computerChoice) {
    div.innerText = "";
    div.innerText = `nobody wins. Draw`;
  } else {
    div.innerText = "";
    computerScore += 1;
    div.innerText = `Computer wins. ${computerChoice} beats ${humanChoice}`;
  }

  // ADD SCORE TO THE BODY
  scoreComputer.innerText = `Computer score: ${computerScore}`;
  scoreHuman.innerText = `Human score: ${humanScore}`;
  body.appendChild(scoreHuman);
  body.appendChild(scoreComputer);

  // FIRST TO 5 WINS
  if (humanScore >= 5) {
    let winnerDiv = document.createElement("div");
    winnerDiv.innerText = "Human wins! Hurray";
    body.appendChild(winnerDiv);
  } else if (computerScore >= 5) {
    let winnerDiv = document.createElement("div");
    winnerDiv.innerText = "Computer wins! Hurray";
    body.appendChild(winnerDiv);
  }
};

// event listeners triggering choices for the buttons
rock.addEventListener("click", () =>
  playRound(rock.innerText, getComputerChoice())
);
paper.addEventListener("click", () =>
  playRound(paper.innerText, getComputerChoice())
);
scissors.addEventListener("click", () =>
  playRound(scissors.innerText, getComputerChoice())
);

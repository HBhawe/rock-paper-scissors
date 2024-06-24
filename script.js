// console.log("Hello world");

const choices = ["rock", "paper", "scissors"];
var humanScore = 0;
var computerScore = 0;

let getComputerChoice = function () {
  let random = Math.floor(Math.random() * 3);
  //   console.log(random);
  let computerChoice = choices[random].toUpperCase();
  return computerChoice;
};

// console.log(getComputerChoice());

let getHumanChoice = function () {
  let humanChoice = prompt(
    `Enter a choice for rock, paper or scissors`
  ).toUpperCase();
  if (
    humanChoice != "ROCK" &&
    humanChoice != "PAPER" &&
    humanChoice != "SCISSORS"
  ) {
    alert("invalid input. try again");
    getHumanChoice();
  }
  return humanChoice;
};

// console.log(getHumanChoice());

let playRound = function (humanChoice, computerChoice) {
  if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    humanScore += 1;
    console.log("Human wins. Rock beats scissors");
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    humanScore += 1;
    console.log("Human wins. Rock beats scissors");
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    humanScore += 1;
    console.log("Human wins. Rock beats scissors");
  } else if (humanChoice == computerChoice) {
    console.log("nobody wins.");
  } else {
    computerScore += 1;
    console.log(`Computer wins. ${computerChoice} beats ${humanChoice}`);
  }
};

const humanSelection = getHumanChoice();
console.log(`Human choice = ${humanSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer choice = ${computerSelection}`);
playRound(humanSelection, computerSelection);

console.log(`Computer score = ${computerScore}`);
console.log(`Human score = ${humanScore}`);

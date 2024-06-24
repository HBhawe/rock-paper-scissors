// console.log("Hello world");

const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

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

let playRound = function (humanChoice, computerChoice) {};

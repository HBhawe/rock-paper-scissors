const choices = ["rock", "paper", "scissors"];

let getComputerChoice = function () {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = choices[random].toUpperCase();
  return computerChoice;
};

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

let playGame = function () {
  var humanScore = 0;
  var computerScore = 0;

  let playRound = function (humanChoice, computerChoice) {
    console.log(`Human choice = ${humanChoice}`);
    console.log(`Computer choice = ${computerChoice}`);
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
      humanScore += 1;
      console.log("Human wins. Rock beats scissors");
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      humanScore += 1;
      console.log("Human wins. Rock beats scissors");
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
      humanScore += 1;
      console.log("Human wins. Rock beats scissors");
    } else if (humanChoice === computerChoice) {
      console.log("nobody wins.");
    } else {
      computerScore += 1;
      console.log(`Computer wins. ${computerChoice} beats ${humanChoice}`);
    }
  };

  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(`Human wins with ${humanScore}-${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins with ${humanScore}-${computerScore}`);
  } else {
    console.log("Draw");
  }
};

playGame();

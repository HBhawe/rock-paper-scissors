const choices = ["ROCK", "PAPER", "SCISSORS"];

let getComputerChoice = function () {
  let random = Math.floor(Math.random() * 3);
  let computerChoice = choices[random];
  return computerChoice;
};

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

let playGame = function () {
  var humanScore = 0;
  var computerScore = 0;

  let playRound = function (humanChoice, computerChoice) {
    console.log(`Human choice = ${humanChoice}`);
    console.log(`Computer choice = ${computerChoice}`);
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
      humanScore += 1;
      console.log(`Human wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      humanScore += 1;
      console.log(`Human wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
      humanScore += 1;
      console.log(`Human wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
      console.log("nobody wins. Draw");
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

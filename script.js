// generate a random computer choice from (rock/paper/scissors)
function computerPlay() {
  let randomSelection = Math.random();
  let selected;
  if (randomSelection <= 0.33) {
    selected = "rock";
  } else if (randomSelection <= 0.66) {
    selected = "paper";
  } else {
    selected = "scissors";
  }
  return selected;
}
let playerScore = 0,
  computerScore = 0;
let playerChoice = "";
let winnerMessage;
let counter = 1;

function round(playerChoice, computerSelection) {
  //change player input to lower case

  // do {
  //   playerChoice = playerSelection;
  // } while (playerChoice === computerSelection);
  //check the winner and increase winner's score
  if (
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "rock" && computerSelection === "scissors")
  ) {
    winnerMessage = console.log(
      `You win ${playerChoice} beats ${computerSelection}`
    );
    playerScore++;
  } else {
    winnerMessage = console.log(
      `You lose ${computerSelection} beats ${playerChoice}`
    );
    computerScore++;
  }

  if (counter === 5 && playerScore > computerScore) {
    console.log("You won the series");
  } else if (counter === 5 && computerScore > playerScore) {
    console.log("You lost the series");
  } else {
    counter++;
    console.log(counter);
    return winnerMessage;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    round(prompt("Enter rock, paper or scissors", "rock"), computerPlay());
  }
}
game();

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
const buttons = document.querySelectorAll("button");

function playRound(playerChoice, computerSelection) {
  //check the winner and increase winner's score
  if (playerChoice === computerSelection) {
    document.getElementById("result").textContent = `This match is a tie (${computerSelection})`;
  } else if (
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "rock" && computerSelection === "scissors")
  ) {
    document.getElementById("result").textContent = `You win, ${playerChoice} beats ${computerSelection}`;
    playerScore++;
    document.getElementById("score").textContent = `player ${playerScore} - ${computerScore} computer`;
    if (playerScore == 5) {
      document.getElementById("winner").textContent = `You won the series, reload to retry`;
      disable();
    }
  } else {
    document.getElementById("result").textContent = `Computer wins, ${computerSelection} beats ${playerChoice}`;
    computerScore++;
    document.getElementById("score").textContent = `player ${playerScore} - ${computerScore} computer`;
    if (computerScore == 5) {
      document.getElementById("winner").textContent = `You lost the series, , reload to retry`;
      disable();
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(this.textContent, computerPlay());
  });
});

function disable() {
  buttons.forEach((el) => {
    el.disabled = true;
  });
}

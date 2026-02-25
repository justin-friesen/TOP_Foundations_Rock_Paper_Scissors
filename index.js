let humanScore = 0;
let computerScore = 0;

//Computer Logic
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
//End of Computer Logic
//console.log(getComputerChoice());

//Human Logic
function getHumanChoice() {
  let choice = prompt("What's your choice?");
  return choice.toLowerCase();
}

//console.log(getHumanChoice());
//End of Human Logic

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `Human wins! The updated score is: Human Score: ${humanScore} and Computer Score: ${computerScore}`,
    );
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    console.log(
      `Computer wins! The updated score is: Human Score: ${humanScore} and Computer Score: ${computerScore}`,
    );
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie. Try again?");
  }
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You beat the computer! The score was: Human Score: ${humanScore}, Computer Score: ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Sorry, the computer beat you. The score was: Computer Score: ${computerScore}, Human Score: ${humanScore}`,
    );
  }
}

playGame();
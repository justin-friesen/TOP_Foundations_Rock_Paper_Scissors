//Computer Logic
function getComputerChoice(min, max) {
    return Math.random() * (4 - 1) + 1;
};

if (getComputerChoice() < 2) {
    console.log("rock");
} else if (getComputerChoice() < 3) {
    console.log("paper");
} else {
    console.log("scissors");
};
//End of Computer Logic

//Human Logic
function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    return humanChoice;
}

console.log(getHumanChoice());
//End of Human Logic

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase

        if ((humanChoice === "rock") && (computerChoice === "rock")) {
            console.log("It's a tie! Try again?");
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            console.log("You lose! Try again!");
            computerScore++;
        } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            console.log("You Win! Try again?");
            humanScore++;
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            console.log("You Win! Try again?");
            humanScore++;
        } else if ((humanChoice === "paper") && (computerChoice === "paper")) {
            console.log("It's a tie! Try again?");
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            console.log("You lose! Try again!");
            computerScore++;
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            console.log("You lose! Try again!");
            computerScore++;
        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            console.log("You Win! Try again?");
            humanScore++;
        } else if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
            console.log("It's a tie! Try again?");
        } else {
            console.log("Please enter rock, paper or scissors.");
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
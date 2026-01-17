console.log("Hello World");

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

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
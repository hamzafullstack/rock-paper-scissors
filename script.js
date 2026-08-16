//بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

// scoreboards
let ComputerScore = 0;
let HumanScore = 0;

// Computer's choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    }else if (computerChoice === 1) {
        return 'paper';
    }else {
        return 'scissors';
    }
}
console.log("computer: " + getComputerChoice());

// Human's choice
function getHumanChoice() {
    const humanChoice = prompt('Choose one of the following options "rock" "paper" or "scissors" : ');
    return humanChoice.toLowerCase();
}
// console.log("Human: " + getHumanChoice());

// play round
function playRound (humanChoice, computerChoice) {
    if (getHumanChoice() === getComputerChoice()) {
        return 'Tie';
    } else{
        return 'tadah the logic works';
    }
}

console.log(playRound());
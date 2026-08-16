//بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ


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

// play round logic
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Tie';
    } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        return 'Human win';
    }else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        return 'Human win';
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        return 'Human win';
    }else{
        return 'Computer win';
    }

    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
}

// console.log(playRound(getHumanChoice(), getComputerChoice()));

// scoreboards
let ComputerScore = 0;
let HumanScore = 0;

//play Game logic
function playGame(playRound) {
    // round one
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    // round two 
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    // round three
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }

}
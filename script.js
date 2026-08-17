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

// Human's choice
function getHumanChoice() {
    const humanChoice = prompt('Choose one of the following options "rock" "paper" or "scissors" : ');
    return humanChoice.toLowerCase();
}

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
}

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
        console.log(`Round: 1 Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Round: 1 Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    // round two 
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Round: 2 Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Round: 2 Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    // round three
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Round: 3 Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Round: 3 Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    //round four
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Round: 4 Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Round: 4 Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    //round five - final.
      humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if(result === 'Human win') {
        HumanScore++;
        console.log(`Round: 5 Human win because ${humanSelection} beats ${computerSelection} Human score: ${HumanScore}`);
    }else if(result === 'Computer win') {
        ComputerScore++;
        console.log(`Round: 5 Computer win because ${computerSelection} beats ${humanSelection} Computer score: ${ComputerScore}`);
    }else{
        console.log('Tie');
    }
    // final winner Logic
    console.log("=== GAME OVER ===");
    console.log(`Final Scores -> Human: ${HumanScore} | Computer: ${ComputerScore}`);
    if (HumanScore > ComputerScore) {
        console.log("Congratulations! You are the ultimate champion!");
    }else if (ComputerScore > HumanScore) {
        console.log("The computers have won. Better luck next time!");
    }else{
        console.log('Draw');
    }

}

playGame(playRound);
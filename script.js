//بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

// scoreboards
let ComputerScore = 0;
let HumanScore = 0;
let roundCount = 0;
let humanChoice = '';
let pcChoice = '';

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

// selecting Scoreboard HTML Elements.
const roundDisplay = document.querySelector('#round-count');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const messageDisplay = document.querySelector('#message');
const winnerDisplay = document.querySelector('#winner');
// Play Buttons Rock Paper Scissors.
const choices = document.querySelectorAll('.choice');

// GUI Logic here
choices.forEach(btn => {
    btn.addEventListener('click', () => {
        humanChoice = btn.dataset.choice;
        pcChoice = getComputerChoice();
        let result = playRound(humanChoice, pcChoice);
        roundCount++
        if (result === 'Human win') {
            HumanScore++;
            messageDisplay.textContent = `You win because ${humanChoice} beats ${pcChoice}`;
            humanScoreDisplay.textContent = HumanScore;
        }else if (result === 'Computer win') {
            ComputerScore++;
            messageDisplay.textContent = `Computer win because ${pcChoice} beats ${humanChoice}`;
            computerScoreDisplay.textContent = ComputerScore;
        }else{
            messageDisplay.textContent = `Tie! You both chose the ${pcChoice}`;
        }
        roundDisplay.textContent = roundCount;
        if(roundCount === 5) {
            if(HumanScore > ComputerScore) {
                winnerDisplay.textContent = 'Congratulations! You are the ultimate champion!';
            }else if(ComputerScore > HumanScore) {
                winnerDisplay.textContent = 'Computer Win! Better Luck Next Time';
            }else{
                winnerDisplay.textContent = 'Tie! You both got the same score';
            }
            choices.forEach(btn => {
                btn.disabled = true;
            });
        }
    });
});

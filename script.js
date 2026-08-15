//بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 4);
    if (computerChoice === 0) {
        return 'rock';
    }else if (computerChoice === 1) {
        return 'paper';
    }else {
        return 'scissors';
    }
}
getComputerChoice();
function computerPlay() {
    const ropascArray = ['Rock', 'Paper', 'Scissors'];
    const result = ropascArray[Math.floor(Math.random() * ropascArray.length)];
    return result;
};

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Rock') {
        console.log('Tie!');
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        console.log('You win!');
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        console.log('You lose!');
    }

    if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        console.log('You lose!');
    } else if (computerSelection === 'Paper' && playerSelection === 'Paper') {
        console.log('Tie!');
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        console.log('You win!');
    }

    if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        console.log('You win!');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log('You lose!');
    } else if (computerSelection === 'Scissors' && playerSelection === 'Scissors') {
        console.log('Tie!');
    }
};

function game() {
    playerSelection = window.prompt('Please type Rock, Paper, or Scissors', 'Selection');
    playRound(playerSelection, computerPlay());
    playerSelection = window.prompt('Please type Rock, Paper, or Scissors', 'Selection');
    playRound(playerSelection, computerPlay());
    playerSelection = window.prompt('Please type Rock, Paper, or Scissors', 'Selection');
    playRound(playerSelection, computerPlay());
    playerSelection = window.prompt('Please type Rock, Paper, or Scissors', 'Selection');
    playRound(playerSelection, computerPlay());
    playerSelection = window.prompt('Please type Rock, Paper, or Scissors', 'Selection');
    playRound(playerSelection, computerPlay());
};
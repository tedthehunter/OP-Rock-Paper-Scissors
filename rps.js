

let getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

let getHumanChoice = () => {
    return prompt('Choose Rock, Paper, or Scissors').toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

//create logic to play a single round

//determine user choice
//based on user choice, compare to cpu choice
//determine winner, increment winner score
//log winner announcement

let playRound = (humanChoice, computerChoice) => {
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'scissors':
                    humanScore++;
                    console.log('You win! Rock beats Scissors.');
                    break;
                case 'paper':
                    computerScore++;
                    console.log('You lose! Paper beats Rock.');
                    break;
                case 'rock':
                    console.log('Draw! Play Again!');
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    humanScore++;
                    console.log('You win! Paper beats Rock.');
                    break;
                case 'scissors':
                    computerScore++;
                    console.log('You lose! Scissors beats Paper.');
                    break;
                case 'paper':
                    console.log('Draw! Play Again!');
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    humanScore++;
                    console.log('You win! Scissors beats Paper.');
                    break;
                case 'rock':
                    computerScore++;
                    console.log('You lose! Rock beats Scissors.');
                    break;
                case 'scissors':
                    console.log('Draw! Play Again!');
                    break;
            }
            break;
    }
}
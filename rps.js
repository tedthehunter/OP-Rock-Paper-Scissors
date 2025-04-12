

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

let playGame = () => {

let humanScore = 0;
let computerScore = 0;

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

//Round 1
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

//Round 2
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

//Round 3
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

//Round 4
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

//Round 5
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} rounds to ${computerScore}`);
} else if (computerScore > humanScore) {
    console.log(`You lose! ${humanScore} rounds to ${computerScore}`);
} else {
    console.log(`Draw! ${humanScore} rounds to ${computerScore}`);
}
}

playGame();
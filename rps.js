

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
//draw statement at the end to catch ties

let playRound = (humanChoice, computerChoice) => {
    
}
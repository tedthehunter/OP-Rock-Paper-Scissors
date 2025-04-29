
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

let playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    let displayResults = (roundResults) => {
        const result = document.createElement('li');
        result.textContent = roundResults;
        document.querySelector('#resultList').appendChild(result);
        document.querySelector('#humanScore').textContent = `Player Score: ${humanScore}`;
        document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`;
    }

    let playRound = (humanChoice, computerChoice) => {
        switch(humanChoice) {
            case 'rock':
                switch(computerChoice) {
                    case 'scissors':
                        humanScore++;
                        displayResults('You win! Rock beats Scissors.');
                        break;
                    case 'paper':
                        computerScore++;
                        displayResults('You lose! Paper beats Rock.');
                        break;
                    case 'rock':
                        displayResults('Draw! Play Again!');
                        break;
                }
                break;
            case 'paper':
                switch(computerChoice) {
                    case 'rock':
                        humanScore++;
                        displayResults('You win! Paper beats Rock.');
                        break;
                    case 'scissors':
                        computerScore++;
                        displayResults('You lose! Scissors beats Paper.');
                        break;
                    case 'paper':
                        displayResults('Draw! Play Again!');
                        break;
                }
                break;
            case 'scissors':
                switch(computerChoice) {
                    case 'paper':
                        humanScore++;
                        displayResults('You win! Scissors beats Paper.');
                        break;
                    case 'rock':
                        computerScore++;
                        displayResults('You lose! Rock beats Scissors.');
                        break;
                    case 'scissors':
                        displayResults('Draw! Play Again!');
                        break;
                }
                break;
        }
        if (humanScore >= 5) {
            displayResults('You are first to 5 points.  You win!');
        }
        else if (computerScore >= 5) {
            displayResults('The computer beat you to 5 points.  You lose!');
        }
    }

    const buttonDiv = document.createElement('div');
    
    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    buttonDiv.appendChild(rockButton);

    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    buttonDiv.appendChild(paperButton);

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'Scissors';
    buttonDiv.appendChild(scissorsButton);

    document.body.appendChild(buttonDiv);

    buttonDiv.addEventListener('click', (event) => {
        playRound(event.target.textContent.toLowerCase(), getComputerChoice());
    });

    const humanScoreDisplay = document.createElement('h4');
    humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
    humanScoreDisplay.id = 'humanScore';

    const computerScoreDisplay = document.createElement('h4');
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    computerScoreDisplay.id = 'computerScore';

    document.body.appendChild(humanScoreDisplay);
    document.body.appendChild(computerScoreDisplay);

    const resultDiv = document.createElement('div');
    const resultList = document.createElement('ol');
    resultList.id = 'resultList';
    resultDiv.appendChild(resultList);
    document.body.appendChild(resultDiv);
}

playGame();
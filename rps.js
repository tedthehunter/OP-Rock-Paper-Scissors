//Create function getComputerChoice that returns rock, paper, or scissors


//return result

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

console.log(getComputerChoice());
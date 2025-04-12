//Create function getComputerChoice that returns rock, paper, or scissors

//Based on resulting number, set variable to rock, paper, or scissors
//return result

let getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            console.log('rock');
            break;
        case 1:
            console.log('paper');
            break;
        case 2:
            console.log('scissors');
            break;
    }
}

getComputerChoice();
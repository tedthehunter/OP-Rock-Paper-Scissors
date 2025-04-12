//Create function getComputerChoice that returns rock, paper, or scissors

//Generate a random number from a set of 3
//Based on resulting number, set variable to rock, paper, or scissors
//return result

let getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    console.log(x);
}

getComputerChoice();
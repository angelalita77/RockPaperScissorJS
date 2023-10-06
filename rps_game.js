const playerInput = "RoCk";
//let playerInput = prompt();
let playerSelection = fixedCaps(playerInput);
console.log(playerSelection);

function fixedCaps (str){
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.substr(1);
}



function getComputerChoice () {
    const strings = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * strings.length);

    const randomString = strings[randomIndex];

    return randomString;
}

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " " + computerSelection);
    if (playerSelection == computerSelection) {
        return "Draw";
    }
    else if (computerSelection == "Paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (computerSelection == "Scissors")
    {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "Invalid selection. Play again."
    }
}

function game(){
return playRound(playerSelection, computerSelection);
}
console.log(game());
// playRound(playerSelection, computerSelection)
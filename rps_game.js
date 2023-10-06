// Basic Rock Paper Scissors game
// Player choose is consistantly "Rock"
const playerInput = "RoCk";
//let playerInput = prompt();
let playerSelection = fixedCaps(playerInput);
console.log(playerSelection);

// Fix player selection to convert any choose to Rock, Paper or Scissor where the first letter is the only
// capital letter. 
function fixedCaps (str){
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.substr(1);
}


// This function produces random chooses for the computer player. 
// Returns: "Rock", "Paper", or "Scissor"
function getComputerChoice () {
    const strings = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * strings.length);

    const randomString = strings[randomIndex];

    return randomString;
}

//This variable will hold the random choose of the computer. 
const computerSelection = getComputerChoice();

// This function will take the player and computer chooses and determine who will 
// win or lose. If they both have the same choose then it will be a draw.
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

// This function will start the game and return the results of the game. 
// Its rather redundant now but it can be used to put in multiple games at once.
function game(){
return playRound(playerSelection, computerSelection);
}
console.log(game());

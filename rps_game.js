// Basic Rock Paper Scissors game
// Player choose is consistantly "Rock"
//const playerInput = "RoCk";
let playerScore = 0;
let compScore = 0;
let roundNum = 0;

function fixedCaps(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.substr(1);
}

function game() {
  let playerInput = prompt();
  let playerSelection = fixedCaps(playerInput);

  // Fix player selection to convert any choose to Rock, Paper or Scissor where the first letter is the only
  // capital letter.

  // This function produces random chooses for the computer player.
  // Returns: "Rock", "Paper", or "Scissor"
  function getComputerChoice() {
    const strings = ['Rock', 'Paper', 'Scissors'];

    const randomIndex = Math.floor(Math.random() * strings.length);

    const randomString = strings[randomIndex];

    return randomString;
  }

  //This variable will hold the random choose of the computer.
  const computerSelection = getComputerChoice();

  // This function will take the player and computer chooses and determine who will
  // win or lose. If they both have the same choose then it will be a draw.
  function playRound(playerSelection, computerSelection) {
    roundNum = roundNum + 1;
    console.log('------------------------------------');
    console.log('Round: ' + roundNum);
    console.log('Player chooses: ' + playerSelection);
    console.log('Computer chooses: ' + computerSelection);

    if (playerSelection == computerSelection) {
      return 'Draw';
    } else if (
      (computerSelection == 'Paper' && playerSelection == 'Rock') ||
      (computerSelection == 'Scissors' &&
        playerSelection == 'Paper') ||
      (computerSelection == 'Rock' && playerSelection == 'Scissors')
    ) {
      compScore = compScore + 1;
      console.log("Computer Score: " + compScore);
      return (
        'You Lose! ' + computerSelection + ' beats ' + playerSelection
      );
    } else if (
      (computerSelection == 'Scissors' &&
        playerSelection == 'Rock') ||
      (computerSelection == 'Rock' && playerSelection == 'Paper') ||
      (computerSelection == 'Paper' && playerSelection == 'Scissors')
    ) {
      playerScore = playerScore + 1;
      console.log("Player Score: " + playerScore);
      return (
        'You win! ' + playerSelection + ' beats ' + computerSelection
      );
    } else {
      return 'Invalid selection. Play again.';
    }
  }

  console.log(
    playRound(playerSelection, computerSelection, roundNum)
  );
}

game();
game();
game();
game();
game();

function keepScore(player, comp, round) {
  if (round == 5) {
    if (player > comp) return '<<<Player WINS!>>>';
    else if (comp > player) return '<<<Computer WINS!>>>';
    else return '[[[It is a TIE!]]]';
  }
}


console.log("\n");
console.log(keepScore(playerScore, compScore, roundNum));

// This function will start the game and return the results of the game.
// Its rather redundant now but it can be used to put in multiple games at once.

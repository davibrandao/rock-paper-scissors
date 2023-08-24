function getComputerChoice() {
  const numberChoice = Math.floor(Math.random() * (4 - 1) + 1); //choose a number randomly between 1 and 3
  let computerChoice;

  //I opted for a switch case, 'cause doing this I minimize boilerplate.
  switch (numberChoice) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
    default:
      computerChoice = "Invalid choice";
      break;
  }

  console.log(computerChoice);
  return computerChoice;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  //The associated value represents the defeating choice.
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (rules[playerSelection] === computerSelection) { //if playerSelection equals rock, so rock defeat scissors, if scissors equals to computerSelection, so I won.
    return `You win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else {
    return `You lose! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${capitalizeFirstLetter(playerSelection)}`;
  }
}

function game(){
    for (i = 0; i <= 4; i++)
    {
        const playerSelection = prompt("Choose rock, paper or scissors:")
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

console.log(game());

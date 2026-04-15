
// ================ Pseudocode =========================================
//Each player choose between rock, paper or scissors
//Rock beats scissors, scissors beat paper, and paper beats rock
//IF rock
//IF rock
//result is a tie
//ELSE IF it is a paper
//result is a win
//check who selected paper and declare as winner
//ESLE IF it is a scissors
//result is lose
//check who selected rock and declare as winner
//ELSE IF paper
//IF paper
//result is a tie
//ELSE IF rock
//result is lose
//check who selected paper and declare as winner
//ELSE IF scissors
//result is a win
//check who selected scissors and declare as winner
//ELSE IF scissors
//IF scissors
//result is a tie
//ELSE IF rock
//result is a win
//check who selected rock and declare as winner
//ELSE IF paper
//result is lose
//check who selected paper and declare as winner


// invoke function to start the game
playGame();


//function to start the game
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(
    "Final Score - Human: " + humanScore + " Computer: " + computerScore,
  );

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock")
      if (computerChoice == "rock") {
        console.log("It is a tie!");
      } else if (computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose!  Paper beats Rock");
      } else {
        humanScore += 1;
        console.log("You win! Rock beat scissors");
      }
    else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You win!  Paper beats Rock");
        humanScore += 1;
      } else if (computerChoice == "paper") {
        console.log("It is a tie!");
      } else {
        console.log("You lose!  Scissors beat Paper.");
        computerScore += 1;
      }
    } else {
      if (computerChoice == "rock") {
        computerScore += 1;
        console.log("You lose! Rock beat Scissors.");
      } else if (computerChoice == "paper") {
        humanScore += 1;
        console.log("You win! Scissors beat Paper.");
      } else {
        console.log("It is a tie!");
      }
    }
  }
}

//Get players choice
function getHumanChoice() {
  let userPick = prompt(
    "Make a selection.  Type 1 for rock, 2 for paper or 3 for scissors. ",
  );
  return userPick.toLowerCase();
}

//Declare a function to generate the computer's choice
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);

  return choice[random];
}

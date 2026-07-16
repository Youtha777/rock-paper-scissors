
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

//DOM selector methods
const btns = document.querySelectorAll("button");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

// invoke function to start the game
playGame();

//function to start the game
function playGame() {
  let computerScore = 0;
  let humanScore = 0;


  //Added event listener to all buttons
  btns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
      //trigger playROund function and pass the argument clicked to getHumanChoice func
      playRound(getHumanChoice(btn.id), getComputerChoice());
    })
  })

  //updated function to use selector to mainpulate text
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock")
      if (computerChoice == "rock") {
        result.textContent = "It is a tie!";
      } else if (computerChoice == "paper") {
        computerScore += 1;
        result.textContent = ("You lose!  Paper beats Rock");
      } else {
        humanScore += 1;
        result.textContent = ("You win! Rock beat scissors");
      }
    else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        result.textContent = ("You win!  Paper beats Rock");
        humanScore += 1;
      } else if (computerChoice == "paper") {
        result.textContent = ("It is a tie!");
      } else {
        result.textContent = ("You lose!  Scissors beat Paper.");
        computerScore += 1;
      }
    } else {
      if (computerChoice == "rock") {
        computerScore += 1;
        result.textContent = ("You lose! Rock beat Scissors.");
      } else if (computerChoice == "paper") {
        humanScore += 1;
        result.textContent = ("You win! Scissors beat Paper.");
      } else {
        result.textContent = ("It is a tie!");
      }
    }
    
    //DOM to update score via UI
    score.textContent=
    "Score - Human: " + humanScore + " Computer: " + computerScore;
    
    //Check to see if someone reached 5 and notify
    if(humanScore == 5 || computerScore == 5){
      humanScore == 5 ? alert("You win!"): alert("You lose.")
      return; 
    }

  }
}


//Get players choice
function getHumanChoice(choice) {
  return choice;
}

//Declare a function to generate the computer's choice
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);

  return choice[random];
}

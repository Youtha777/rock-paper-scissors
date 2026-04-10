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















console.log("Hello World!")

//Invoke function to get computer's choice
getComputerChoice()

//Declare a function to generate the computer's choice
function getComputerChoice()
{
  let choice = ["rock", "paper", "scissors"]

  let random = Math.floor((Math.random() * 3))

  return console.log(choice[random])
}


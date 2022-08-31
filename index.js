const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


const buttons = document.querySelectorAll('button');

let moves = ['rock', 'paper', 'scissors'];
let playerScore = "0";
let computerScore = "0";

console.log("Make a selection!")

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonClicked = button.id;
    let computerSelection = computerPlay();
    game(buttonClicked);
  });

});


function game(buttonClicked) {


        if ((playerScore < 5) || (computerScore < 5)) {
        let playerSelection = buttonClicked;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection ));
        console.log(playerScore)
        console.log(computerScore)
        update_score(playerScore, computerScore);
        console.log("Pick a new selection")
        } 
        if (playerScore >= 5) {
            alert("You won you magnificent animal")
        } else if (computerScore >= 5) {
            alert("You really need to step up and do better. you just lost to a computer");
        } 

       }



       function computerPlay() {
         return moves[Math.floor(Math.random() * moves.length)];
       }
   

       function playRound(playerSelection, computerSelection) {
           if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
               computerScore++;
               return "You lose, paper covers rock";
           } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') {
               return "You tie try again";
           } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
               playerScore++; 
               return "you win, scissors cut paper";
           }
           if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') {
               return "You tie try again";
           } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
               playerScore++;
               return "You win, paper covers the rock";
               
           } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
               computerScore++; 
               return "you lose, rock crushes the scissors";
           }

           if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock') {
               playerScore++;
               return "You win, rock crush scissors";
           } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
               computerScore++;
               return "You lose, scissors cut through the weak paper";
           } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors') {
                return "You tie try again";
           }
       }

       function update_score(playerScore, computerScore) {
        document.getElementById("newPlayerScore").textContent = playerScore.toString();
        document.getElementById("newComputerScore").textContent = computerScore.toString();
    }













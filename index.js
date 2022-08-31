const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


const buttons = document.querySelectorAll('button');

console.log("Make a selection!")

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonClicked = button.id;
    let computerSelection = computerPlay();
    console.log(game(buttonClicked));
  });

});




function game(buttonClicked) {

        let playerSelection = buttonClicked;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection ));
        console.log(playerScore)
        console.log(computerScore)
        console.log("Pick a new selection")
       }

       let moves = ['rock', 'paper', 'scissors'];
       let playerScore = parseInt(0);
       let computerScore = parseInt(0);

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













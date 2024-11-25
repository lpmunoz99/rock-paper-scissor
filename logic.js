//Create 3 string variables for option rock, paper and scissor.
const op1 = "rock";
const op2 = "paper";
const op3 = "scissors";
let humanScore = 0;
let computerScore = 0;

//Create function to get a random from 0 to 2, and then through an if get rock, paper, scissor options
function getComputerChoice(limit = 3){
    let result = Math.floor(Math.random() * limit);

    if(result === 0){
        return op1;
    } else if(result === 1){
        return op2;
    } else if (result === 2) {
        return op3;
    }
}

//Create function to calculate winner between user option and computer option each round, grabbing getHumanChoice and getComputerChoice as arguments

function playRound(humanChoice, computerChoice) {


    if (humanChoice === "rock" && computerChoice === op2){
        computerScore++;
        paraResult.textContent = "You Lose! Paper beats Rock.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "rock" && computerChoice === op3){
        humanScore++;
        paraResult.textContent = "You Win! Rock beats Scissors.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "rock" && computerChoice === op1){
        paraResult.textContent = "It's a draw!";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === op1){
        humanScore++;
        paraResult.textContent = "You Win! Paper beats Rock.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === op2){
        paraResult.textContent = "It's a Draw!";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === op3){
        computerScore++;
        paraResult.textContent = "You Lose! Scissors beats paper.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === op1){
        computerScore++;
        paraResult.textContent = "You Lose! Rock beats Scissors.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === op2){
        humanScore++;
        paraResult.textContent = "You Win! Scissors beats Paper.";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === op3){
        paraResult.textContent = "It's a Draw!";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
    } else {
        paraResult.textContent = "Enter a valid option";
    }

    if (humanScore === 5){
        paraWinner.textContent = "You Win! Congratulations!";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
        humanScore = 0;
        computerScore = 0;
        paraResult.textContent = "";
        
    } else if (computerScore === 5) {
        paraWinner.textContent = "Computer Wins! Better luck next time";
        paraScores.textContent = "Your Score:" + humanScore + "\nComputer Score:" + computerScore;
        humanScore = 0;
        computerScore = 0;
        paraResult.textContent = "";
    } else {
        paraWinner.textContent = "";
    }
}

/*

//Create function to calculate winner between user option and computer option in the game, using playRound and variables for computer and user options.

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (i = 0; i < 5; i++){
        let humanSelection = getHumanChoice(prompt("Enter Rock, Paper or Scissors:").toLowerCase());
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(computerScore > humanScore) {
        console.log("Computer Wins! Better luck next time!");
    } else if (humanScore > computerScore) {
        console.log("You Won! Congrats!");
    } else {
        console.log("It's a Draw, same amount of points!");
    }
}
    
playGame();

*/

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id){
            case "btnRock":
            	playRound("rock", getComputerChoice());
                break;
            case "btnPaper":
                playRound("paper", getComputerChoice());
                break;
            case "btnScissors":
                playRound("scissors", getComputerChoice());
                break;
            default:
        }
    });
});

const bod = document.querySelector("body");
const resultContainer = document.createElement("div");
resultContainer.classList.add("Container2");
bod.appendChild(resultContainer);
const paraResult = document.createElement("p");
paraResult.classList.add("Result");
resultContainer.appendChild(paraResult);
const paraWinner = document.createElement("p");
paraWinner.classList.add("Winner");
resultContainer.appendChild(paraWinner);
const paraScores = document.createElement("p");
paraScores.classList.add("Scores");
resultContainer.appendChild(paraScores);

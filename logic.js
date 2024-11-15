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


//Create function to get human choice with an input

function getHumanChoice (input){
    if(input === "rock"){
        return op1;
    } else if (input === "paper") {
        return op2;
    } else if (input === "scissors") {
        return op3;
    } else {
        return "invalid option";
    }
}

//Create function to calculate winner between user option and computer option each round, grabbing getHumanChoice and getComputerChoice as arguments

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === op2){
        console.log("You Lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === op3){
        console.log("You Win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === op1){
        console.log("It's a draw!");
    } else if (humanChoice === "paper" && computerChoice === op1){
        console.log("You Win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === op2){
        console.log("It's a Draw!");
    } else if (humanChoice === "paper" && computerChoice === op3){
        console.log("You Lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === op1){
        console.log("You Lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === op2){
        console.log("You Win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === op3){
        console.log("It's a Draw!");
    } else {
        console.log("Enter a valid option");
    }

    console.log(computerScore);
    console.log(humanScore);
}

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
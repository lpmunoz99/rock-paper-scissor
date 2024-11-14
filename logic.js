//Create 3 string variables for option rock, paper and scissor.
const op1 = "Rock";
const op2 = "Paper";
const op3 = "Scissors";

//Create function to get a random from 0 to 2, and then through an if get rock, paper, scissor options
function getComputerChoice(max = 3){
    let result = Math.floor(Math.random() * max);

    if(result === 0){
        console.log(op1);
    } else if(result === 1){
        console.log(op2);
    } else {
        console.log(op3);
    }
}

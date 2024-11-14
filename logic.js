//Create 3 string variables for option rock, paper and scissor.
const op1 = "Rock";
const op2 = "Paper";
const op3 = "Scissors";

//Create function to get a random from 0 to 2, and then through an if get rock, paper, scissor options
function getComputerChoice(limit){
    let result = Math.floor(Math.random() * limit);

    if(result === 0){
        return op1;
    } else if(result === 1){
        return op2;
    } else {
        return op3;
    }
}

let value = getComputerChoice(3);
console.log(value);


//Create function to get human choice with an input

function getHumanChoice (input){
    if(input === "Rock"){
        return op1;
    } else if (input === "Paper") {
        return op2;
    } else if (input === "Scissors") {
        return op3;
    }
}

let option = getHumanChoice(prompt("Enter your option:"));
console.log(option);
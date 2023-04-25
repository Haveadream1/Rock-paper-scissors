let playerScore = 0;
let computerScore = 0;

function getComputerChoice(array) {
    //get  random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    //get random item
    const choice = array[randomIndex];
    return choice;
}
const array = ['rock','paper','scissors'];
let result = getComputerChoice(array);
console.log(result);

// get value and make it case insensitive 
let playerSelection = prompt('What is your choice ?', 'Rock, Paper, Scissors').toLowerCase();
console.log(playerSelection);
// TODO take the first letter and capitalize it

let computerSelection = result
// Defines the result of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        console.log(`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        console.log(`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        console.log(`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === computerSelection) {
        console.log('Equality !');
        console.log(`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else {
        console.log(`You loose, ${playerSelection} was beaten by ${computerSelection}`);
        computerScore++;
        console.log(`The score is ${playerScore} for you to ${computerScore} for the computer`);
    }
}
console.log(playRound(playerSelection, computerSelection));

function game() {
    let i = 1;
    if(i < 5) {
        i++;
        result = getComputerChoice(array);
        console.log(result);
        computerSelection = result
        playerSelection = prompt('What is your choice ?', 'Rock, Paper, Scissors').toLowerCase();
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    } else if(playerScore >= 3) {
        console.log(`You have won with ${playerScore} points`)
    } else if(computerScore >= 3) {
        console.log(`The computer win with ${computerScore} points`)
    } 
}
console.log(game());


//launch Game
//computer choice random
//player choice 

//launch first round
//display the winner
    // rock beat scissors
    // scissors beat paper
    // paper beat rock
    // if computer choice and player choice is the same = equality
// take score

// launch second round
    // take score
// launch third and last round
    // take score
    //display the winner

// propose to reload a game
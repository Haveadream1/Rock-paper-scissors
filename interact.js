let playerScore = 0;
let computerScore = 0;
let resultPlayer;
let resultComputer;
let playerSelection;
let computerSelection;
let displayScore;
let displaySentence
let textResult;

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const choice = array[randomIndex];
    return choice;
}
const array = ['rock','paper','scissors'];

resultComputer = console.log(resultComputer);
resultPlayer = console.log(resultPlayer);

function playRound(playerSelection, computerSelection) {
    playerSelection = resultPlayer;
    computerSelection = resultComputer;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        displaySentence = (`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        displaySentence = (`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        displaySentence = (`You win, ${playerSelection} beat ${computerSelection}`);
        playerScore++;
        displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else if (playerSelection === computerSelection) {
        displaySentence = ('Equality !');
        displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    } else {
        displaySentence = (`You loose, ${playerSelection} was beaten by ${computerSelection}`);
        computerScore++;
        displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    }
    return playerScore, computerScore;
}
// mb reduce the size of the result text
// the background amado
const button = document.querySelectorAll('button');
function clickRock() {
    resultPlayer = 'rock';
    resultComputer = getComputerChoice(array);
    console.log(resultComputer);
    playRound(playerSelection, computerSelection);
    listenerText();
    listenerDiv();
    stopGame();
    return resultPlayer , resultComputer; 
}
function clickPaper() {
    resultPlayer = 'paper';
    resultComputer = getComputerChoice(array);
    console.log(resultComputer);
    playRound(playerSelection, computerSelection);
    listenerText();
    listenerDiv();
    stopGame();
    return resultPlayer , resultComputer; 
}
function clickScissors() {
    resultPlayer = 'scissors';
    resultComputer = getComputerChoice(array);
    console.log(resultComputer);
    playRound(playerSelection, computerSelection);
    listenerText();
    listenerDiv();
    stopGame();
    return resultPlayer , resultComputer; 
}
button[0].addEventListener('click', clickRock);
button[1].addEventListener('click', clickPaper);
button[2].addEventListener('click', clickScissors);

const container = document.querySelector('.center');
function listenerText() {
    const p = document.querySelector('.result-score');
    p.textContent = displayScore;
    container.appendChild(p);
}
function listenerDiv() {
    const div = document.querySelector('.result-sentence');
    div.textContent = displaySentence;
    container.appendChild(div);    
}

function stopGame() {
    if(playerScore === 3) {
        document.querySelector('.rock-selection').disabled = true;
        document.querySelector('.paper-selection').disabled = true;
        document.querySelector('.scissors-selection').disabled = true;
        textResult = 'You Win !'
        showAlert();
        resetScore();
        return textResult;
    } else if(computerScore === 3) {
        document.querySelector('.rock-selection').disabled = true;
        document.querySelector('.paper-selection').disabled = true;
        document.querySelector('.scissors-selection').disabled = true;
        textResult = 'You Loose !'
        showAlert();
        resetScore();
        return textResult;
    }
}

const containerAlert = document.querySelector('.container-alert');
function textAlert() {
    const textResultAlert = document.querySelector('.text-alert');
    textResultAlert.textContent = textResult;
    containerAlert.appendChild(textResultAlert);
}
const buttonHideAlert = document.querySelector('.button-alert');
function showAlert() {
    const alert = document.querySelector('.container-alert');
    alert.style.visibility='visible';
    alertBack();
    const forBack = document.querySelector('.for-back');
    forBack.style.visibility='visible';
    textAlert();
    containerAlert.appendChild(buttonHideAlert);
}  
function hideAlert() {
    const alert = document.querySelector('.container-alert');
    alert.style.visibility='hidden';
    const forBack = document.querySelector('.for-back');
    forBack.style.visibility='hidden';
}
function alertBack() {
    const forBack = document.querySelector('.for-back');
    forBack.style.position = 'fixed';
    forBack.style.width = '1200px';
    forBack.style.height = '950px';
    forBack.style.top = '0';
    forBack.style.left = '0';
    forBack.style.backgroundColor = 'rgba(0, 0, 0, 0.58)';
}
buttonHideAlert.addEventListener('click', hideAlert);

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.rock-selection').disabled = false;
    document.querySelector('.paper-selection').disabled = false;
    document.querySelector('.scissors-selection').disabled = false;
    return playerScore, computerScore;
}
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
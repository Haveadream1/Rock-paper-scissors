let playerChoice, computerChoice;
let playerScore = 0;
let computerScore = 0;
let roundSentence, roundScore;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const againButton = document.querySelector('.again-button');
const alertSection = document.querySelector('.alert-section');
const alertContainer = document.querySelector('.alert-container');
const alertText = document.querySelector('.alert-text');

const array = ['rock','paper','scissors'];
const getComputerChoice = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const choice = array[randomIndex];
    return choice;
}

const setDisplay = (playerChoice, computerChoice) => {
    roundSentence = (`You win, ${playerChoice} beats ${computerChoice}`);
    playerScore++;
    roundScore = (`${playerScore} - ${computerScore}`);
    return playerScore, computerScore;
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        setDisplay(playerChoice, computerChoice);
    } else if (playerChoice === computerChoice) {
        roundSentence = ('Equality !');
        roundScore = (`${playerScore} - ${computerScore}`);
    } else {
        roundSentence = (`You loose, ${playerChoice} was beaten by ${computerChoice}`);
        computerScore++;
        roundScore = (`${playerScore} - ${computerScore}`);
        //displayScore = (`The score is ${playerScore} for you to ${computerScore} for the computer`);
    }
    return playerScore, computerScore;
}

const header = document.querySelector('header');
const displayScore = () => {
    const score = document.querySelector('.score');
    score.textContent = roundScore;
    header.appendChild(score);
}

// function listenerDiv() {
//     const div = document.querySelector('.result-sentence');
//     div.textContent = displaySentence;
//     container.appendChild(div);    
// }


const stopGame = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if(playerScore === 3) {
        textResult = 'You Win !'
        displayAlert(textResult)
        resetScore();
    } else if(computerScore === 3) {
        textResult = 'You Loose !'
        displayAlert(textResult)
        resetScore();
    }
}

againButton.addEventListener('click', () => {
    alertSection.style.visibility= 'hidden';
});

const displayAlert = () => {
    alertSection.style.visibility= 'visible';

    alertText.textContent = textResult;
    alertContainer.appendChild(alertText);

    // let alertButton = document.createElement('button');
    // alertButton.classList('again-button');
    // alertContainer.appendChild(alertButton);

    // Button is on top of the text

}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    return playerScore, computerScore;
}

const launchGame = (playerChoice, computerChoice) => {
    if ((playerScore != 3) && (computerScore != 3)) { // 1 round de trop
        playRound(playerChoice, computerChoice);
        console.log(playerChoice,computerChoice);
        displayScore();
    } else {
        stopGame();
    }
    return playerChoice , computerChoice; 
}

rock.addEventListener("click", () => {
    playerChoice = 'rock';
    computerChoice = getComputerChoice(array);

    launchGame(playerChoice, computerChoice);
})

paper.addEventListener("click", () => {
    playerChoice = 'paper';
    computerChoice = getComputerChoice(array);

    launchGame(playerChoice, computerChoice);
})

scissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice(array);

    launchGame(playerChoice, computerChoice);
})

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
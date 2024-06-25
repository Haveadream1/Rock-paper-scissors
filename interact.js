let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;
let roundSentence, roundScore;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const againButton = document.querySelector('.again-button');
const alertSection = document.querySelector('.alert-section');
const alertContainer = document.querySelector('.alert-container');
const alertText = document.querySelector('.alert-text');

const header = document.querySelector('header');
const score = document.querySelector('.score');

const footer = document.querySelector('footer');
const result = document.querySelector('.result');

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
    }
    return playerScore, computerScore;
}

const choiceSection = document.querySelector('.choice-section');
const computerChoiceImage = document.querySelector('.computer-choice-img');
const playerChoiceImage = document.querySelector('.player-choice-img');

const displayChoice = () => {
    // choiceSection.style.visibility= 'hidden';
    // playerChoiceImage.style.visibility= 'visible';

    // if (playerChoice === 'rock') {
    //     playerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _fisted hand sign_.jpg" alt="Fist emoji">';
    // } else if (playerChoice === 'paper') {
    //     playerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _raised hand with fingers splayed_.jpg" alt="Palm emoji">';
    // } else {
    //     playerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _victory hand_.jpg" alt="Peace emoji">';
    // }

    if (computerChoice === 'rock') {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _fisted hand sign_.jpg" alt="Fist emoji">';
    } else if (computerChoice === 'paper') {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _raised hand with fingers splayed_.jpg" alt="Palm emoji">';
    } else {
        computerChoiceImage.innerHTML = '<img src="pictures/🦆 emoji _victory hand_.jpg" alt="Peace emoji">';
    }
}

const displayInfoRound = () => {
    score.textContent = roundScore;
    header.appendChild(score);

    result.textContent = roundSentence;
    footer.appendChild(result);
}

const displayAlert = () => {
    alertSection.style.visibility= 'visible';

    alertText.textContent = textResult;
    alertContainer.appendChild(alertText);
}

againButton.addEventListener('click', () => {
    alertSection.style.visibility = 'hidden';
});

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    return playerScore, computerScore;
}

const stopGame = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    computerChoiceImage.textContent = '?';

    if(playerScore === 3) {
        textResult = 'You Win !';
        displayAlert(textResult);
    } else if(computerScore === 3) {
        textResult = 'You Loose !';
        displayAlert(textResult);
    }
    resetScore();
}

const launchGame = (playerChoice, computerChoice) => {
    if ((playerScore === 3) || (computerScore === 3)) { // 1 click de trop
        stopGame();
    } else {
        playRound(playerChoice, computerChoice);
        console.log(playerChoice,computerChoice);


        displayChoice();
        displayInfoRound();
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
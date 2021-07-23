const playerChoice = document.querySelectorAll('.playerBtn');
const computerChoice = document.querySelectorAll('.computerBtn')
const display = document.querySelectorAll('.playerBtn');
const computerSpan = document.querySelector('.computerspan');
const playerSpan = document.querySelector('.playerspan');
const roundSpan = document.querySelector('.roundspan');
const scoreSpan = document.querySelector('.scorespan');
const h1winner = document.querySelector('#winner-h1');
const h2winner = document.querySelector('#winner-h2');

playerChoice.forEach((button) => button.addEventListener('click', playRound));
display.forEach((b) => b.addEventListener('click', displayScore));

function computerSelectOption () {
    let computerOptions = ["rock", "paper", "scissors"]
    let computerPick = computerOptions[Math.floor(Math.random()*3)]
    return computerPick
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

//DISPLAYS THE WINNER AND RELOADS THE PAGE
function displayScore() {
    if (playerScore === 5 | computerScore === 5) {
        if(playerScore > computerScore) {
            h1winner.innerHTML = 'You win the game!!';
            h1winner.style.color = 'rgb(108, 108, 255)';
            h2winner.innerHTML = 'Refresh to play again';
            alert('Game over!');
            window.location.reload(true); 
        } else if(computerScore > playerScore) {
            h1winner.innerHTML = 'Computer wins the game!!';
            h1winner.style.color = 'rgb(185, 32, 83)';
            h2winner.innerHTML = 'Refresh to play again';
            alert('Game over!');
            window.location.reload(true);
        }        
    }
    
}


function playRound (e) {

    e.preventDefault();
    round++;

    //SELECTS PLAYER CHOICE
    const playerChooses = this.value;

    //SELECTS COMPUTER CHOICE    
    const computerChooses = computerSelectOption();

    //HIGHLIGHTS COMPUTER CHOICE
    for (let i = 0; i<3; i++) {
        if (computerChoice[i].classList.contains(`${computerChooses}`)) {
            computerChoice[i].style.boxShadow = '0 0 20px 10px rgb(185, 32, 83)';
        }
    }

    //DECIDE WHO IS THE WINNER
    let winner;
    if (playerChooses === 'rock' && computerChooses === 'paper') {
        winner = 'computer wins'
    }else if (playerChooses === 'rock' && computerChooses === 'scissors') {
        winner = 'player wins'
    }else if (playerChooses === 'paper' && computerChooses === 'rock') {
        winner = 'player wins'
    }else if (playerChooses === 'paper' && computerChooses === 'scissors') {
        winner = 'computer wins'
    }else if (playerChooses === 'scissors' && computerChooses === 'paper') {
        winner = 'player wins'
    }else if (playerChooses === 'scissors' && computerChooses === 'rock') {
        winner = 'computer wins'
    }else if (playerChooses === computerChooses) {
        winner = "it's a tie";
    }

    //UPDATES THE SCORE

    if (winner === 'player wins') {
        playerScore++

    } else if (winner === 'computer wins') {
        computerScore++
    }
    playerSpan.innerHTML = `${playerScore}`;
    computerSpan.innerHTML = `${computerScore}`;
    roundSpan.innerHTML = `${round}`;
    scoreSpan.innerHTML = `${winner}`;


    //DISABLES HIGHLIGHTS
    computerChoice.forEach(btn => btn.addEventListener('transitionend', removeTransition));

    function removeTransition (e) {
        for (let i = 0; i<3; i++) {
            if(e.propertyName == 'box-shadow') {
                computerChoice[i].style.boxShadow = '0 0 0 0 black'
            }

        }
        
    };
};
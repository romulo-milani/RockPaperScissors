const playerChoice = document.querySelectorAll('.playerBtn');
const computerChoice = document.querySelectorAll('.computerBtn')
const display = document.querySelectorAll('.playerBtn');
const computerSpan = document.querySelector('.computerspan');
const playerSpan = document.querySelector('.playerspan');
const roundSpan = document.querySelector('.roundspan');
const scoreSpan = document.querySelector('.scorespan');

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

function displayScore() {
    if (playerScore === 5 | computerScore === 5) {
        if(playerScore > computerScore) {
            alert('You win the game!!')
        } else if(computerScore > playerScore) {
            alert ('Computer wins the game!!')
        }
        window.location.reload(true); 
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
    computerHighlightBtn.forEach(btn => btn.addEventListener('transitionend', removeTransition));

    function removeTransition (e) {
        if(e.propertyName == 'transform') {
            this.classList.remove('computerHighlighter')
        }
    };

};
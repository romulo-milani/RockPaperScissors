function computerPlay () {
    let computerOptions = ["rock", "paper", "scissors"]
    let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)]
    return computerChoice
}


function playRound(playerSelection, computerSelection) {
    let winner;
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        winner = 'computer'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        winner = 'player'
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winner = 'player'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        winner = 'computer'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winner = 'player'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        winner = 'computer'
    }else if (playerSelection === computerSelection) {
        winner = 'a tie'
    }

    return winner;
}



/*function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i<=5; i++) {
        console.log(`--------Round number ${i}--------`);



        const playerSelectionInitialValue = window.prompt(`Choose rock, paper or scissors:`)
        const playerPick = playerSelectionInitialValue.toLowerCase()
        const computerPick = computerPlay()

        console.log(`Your choice: ${playerPick}`)
        console.log(`Computer choice: ${computerPick}`)
        console.log(`The winner is: ${playRound(playerPick, computerPick)}`)
            if (playRound(playerPick, computerPick) === 'player') {
                playerScore++
            }else if(playRound(playerPick, computerPick) === 'computer') {
                computerScore++
            }else if(playRound(playerPick, computerPick) === 'a tie') {
                computerScore++;
                playerScore++
            }
        console.log(`Scores: player: ${playerScore}  computer: ${computerScore}`)
    }

    console.log("-----------------------------")
    let whoWon;
    if (playerScore > computerScore) {
        whoWon = 'Player!!'
    }else if (playerScore < computerScore) {
        whoWon = 'Computer!!'
    } else if (playerScore === computerScore) {
        whoWon = "It's a tie!!"
    }

    console.log(`AND THE WINNER IS: ${whoWon}`)
}*/




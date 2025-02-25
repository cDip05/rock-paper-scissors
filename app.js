let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomChoice = Math.random()
    if (0 <= randomChoice && randomChoice < (1 / 3)) {
        return 'Rock'
    } else if ((1 / 3) <= randomChoice && randomChoice < (2 / 3)) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors? : ");
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        return console.log("This is a tie")
    }
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    if (winConditions[humanChoice] === computerChoice) {
        humanScore += 1
        return console.log(`You win, computer chose ${computerChoice}. The scores are, Player: ${humanScore} Computer: ${computerScore}`)
    } else {
        computerScore += 1
        return console.log(`You lose, computer chose ${computerChoice}. The scores are, Player: ${humanScore} Computer: ${computerScore}`)
    }
}

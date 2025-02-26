let humanScore = 0
let computerScore = 0

const playerContainer = document.querySelector(".player--selection")
const playerContent = document.createElement("div")
const computerContainer = document.querySelector(".computer--selection")
const computerContent = document.createElement("div")
const showButtons = document.querySelectorAll(".hidden")

const playerButtons = document.querySelectorAll(".btn--player")
playerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        getPlayerChoice(e),
        getComputerChoice()
    })
})


const startButton = document.querySelector(".start--game") 
startButton.onclick = () => startNewGame();

function getPlayerChoice(event) {
    const playerChoice = event.target.textContent
    playerContent.classList.add("display--player")
    playerContent.textContent = playerChoice
    playerContainer.appendChild(playerContent)
    return playerChoice
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomChoice]
    
    computerContent.classList.add("display--computer")
    computerContent.textContent = computerChoice
    computerContainer.appendChild(computerContent)

    return computerChoice
}

function startNewGame() {
    humanScore = 0
    computerScore = 0
    startButton.style.display = 'none'
    showButtons.forEach((btn) => {
        btn.classList.remove('hidden')
    })
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

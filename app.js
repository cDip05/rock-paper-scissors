let humanScore = 0
let computerScore = 0

const playerContainer = document.querySelector(".player--selection")
const playerContent = document.createElement("div")
const computerContainer = document.querySelector(".computer--selection")
const computerContent = document.createElement("div")
const scoresContainer = document.querySelector(".display--scores")
const scoresContent = document.createElement("div")
const showButtons = document.querySelectorAll(".hidden")
const result = document.querySelector(".result")

const playerButtons = document.querySelectorAll(".btn--player")
playerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        playRound(getPlayerChoice(e),getComputerChoice())
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
    result.innerHTML = 'First to 5 points wins!'
    startButton.style.display = 'none'
    scoresContent.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    scoresContainer.appendChild(scoresContent)
    showButtons.forEach((btn) => {
        btn.classList.remove('hidden')
    })
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice === computerChoice) {
        result.innerHTML = 'This round is a tie'
    } else if (winConditions[humanChoice] === computerChoice) {
        humanScore += 1
        result.innerHTML = 'You win this round!'
    } else {
        computerScore += 1
        result.innerHTML = 'You lose this round'
    }
    scoresContent.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    scoresContainer.appendChild(scoresContent)
    
    if (humanScore == 5 || computerScore == 5) {
        result.innerHTML = "Start a new game"
        startButton.style.display = 'block'
        showButtons.forEach((btn) => {
            btn.classList.add('hidden')
        })
        if (humanScore == 5) {
            scoresContent.textContent = "You won!"
        } else {
            scoresContent.textContent = "You lost!"
        }
        scoresContainer.appendChild(scoresContent)
    }
}

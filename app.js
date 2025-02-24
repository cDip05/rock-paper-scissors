function getComputerChoice() {
    let randomChoice = Math.random()
    if ( 0 <= randomChoice && randomChoice < (1/3)) {
        return 'Rock'
    } else if ((1/3) <= randomChoice && randomChoice < (2/3)) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

console.log(getComputerChoice());
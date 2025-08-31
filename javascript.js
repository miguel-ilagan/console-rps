function getComputerChoice(max) {
    let index = Math.floor(Math.random() * max);
    let computerChoice;
    
    if (index == 0) {
        computerChoice = "rock"

    } else if (index == 1) {
        computerChoice = "paper"

    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("enter your choice (rock, paper or scissors")
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice == 'rock') & (computerChoice == 'paper')) {
        console.log("You lost!")
        computerScore++
    } else if ((humanChoice == 'paper') & (computerChoice == 'scissors')) {
        console.log("You lost!")
        computerScore++
    }
    else if ((humanChoice == 'scissors') & (computerChoice == 'rock')) {
        console.log("You lost!")
        computerScore++
    }
    else {
        console.log("You won")
        humanScore++
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);
        console.log("human selection:", humanSelection, "computer selection:", computerSelection)
        playRound(humanSelection, computerSelection);
        console.log("human score:", humanScore, "computer score:", computerScore)
    }
}

let humanScore = 0;
let computerScore = 0;
playGame()

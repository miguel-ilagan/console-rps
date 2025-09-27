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
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                resolve(button.id);
            });
        });
    });
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice == 'rock') && (computerChoice == 'paper')) {
        console.log("You lost!")
        computerScore++
    } else if ((humanChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log("You lost!")
        computerScore++
    }
    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log("You lost!")
        computerScore++
    }
    else {
        console.log("You won")
        humanScore++
    }

}

async function playGame() {
    while ((humanScore < 5) && (computerScore < 5)) {
        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice(3);
        const game_div = document.createElement("div");
        game_div.textContent = "Game: " + game_num
        container.appendChild(game_div)
        const div1 = document.createElement("div");
        div1.textContent = "human selection: " + humanSelection + " / " + "computer selection: " + computerSelection;
        container.appendChild(div1)
        playRound(humanSelection, computerSelection);
        const div2 = document.createElement("div");
        div2.textContent = "human score: " + humanScore + " / " + "computer score: " + " " + computerScore;
        container.appendChild(div2);
        game_num++
    }
    const winner_div = document.createElement("div");

    if (humanScore == 5) {
        winner_div.textContent = "You won!"
    } else {
        winner_div.textContent = "You lost!"
    }
    container.appendChild(winner_div);
}

let humanScore = 0;
let computerScore = 0;
let game_num = 1
const container = document.querySelector("#container");
playGame()

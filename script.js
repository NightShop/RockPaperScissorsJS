// Inital variables (scores)
let playerScore = 0;
let computerScore = 0;

//Code randomly chooses computer's answer
function computerPlay() {
    let seed = Math.floor(Math.random() * 3);
    if (seed == 0) {
        return "Rock"
    }
    else if (seed == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

//function that evaluates who won, and returns string and number as array
function evaluator(playerChoice, computerSelection) {
    if (playerChoice === "rock" && computerSelection === "Scissors") {
        result = ("Rock beats scissors, you win!");
        return [result, 1];
    }
    else if (playerChoice === "paper" && computerSelection === "Scissors") {
        result = ("Scissors beats Paper, you loose!");
        return [result, 0];
    }
    else if (playerChoice === "scissors" && computerSelection === "Paper") {
        result = ("Scissors beats Paper, you win!");
        return [result, 1];
    }
    else if (playerChoice === "rock" && computerSelection === "Paper") {
        result = ("Paper beats Rock, you loose!");
        return [result, 0];
    }
    else if (playerChoice === "scissors" && computerSelection === "Rock") {
        result = ("Rock beats Scissors, you loose!");
        return [result, 0];
    }
    else if (playerChoice === "paper" && computerSelection === "Rock") {
        result = ("Paper beats rock, you win!");
        return [result, 1];
    }
    else if (playerChoice === computerSelection.toLowerCase()) {
        result = ("It's a tie!");
        return [result, 2];
    }
    else {
        result = ("Incorect entry :/ Try again!");
        return [result, 3];
    }
}


function playRound(e) {
    if (document.querySelector(".results p")) {
        const temp = document.querySelector("div.results");
        const tempP = document.querySelector(".results > p")
        console.log(tempP);
        temp.removeChild(tempP);
    }

    const startButton = document.querySelector("#startGame");
    const computerSelection = computerPlay();
    const playerChoice = e.target.id;
    const evaluatedResults = evaluator(playerChoice, computerSelection);
    const resultsBox = document.querySelector("div.results");
    //console.log(resultsBox);
    const oneResult = document.createElement("p");
    const referenceNode = document.querySelector("div.results > div");
    resultsBox.insertBefore(oneResult, referenceNode);
    oneResult.textContent = evaluatedResults[0];
    if (evaluatedResults[1] === 1) {
        playerScore++;
    }
    else if (evaluatedResults[1] === 0) {
        computerScore++;
    }
    else if (evaluatedResults[1] === 2) {
        playerScore++;
        computerScore++;
    }
    else if (evaluatedResults[1] === 3) {
        i--;
    }


    const playerBucket = document.querySelector("#playerScore");
    const computerBucket = document.querySelector("#computerScore");

    playerBucket.textContent = playerScore;
    computerBucket.textContent = computerScore;

    if (computerScore === playerScore === 5) {
        oneResult.textContent = "The game is a tie! Another round?";
        playerScore = 0;
        computerScore = 0;
        startButton.textContent = "PLAY AGAIN";

    }
    else if (computerScore === 5) {
        oneResult.textContent = "You have lost against a random() :). That's a shame. Another round?";
        playerScore = 0;
        computerScore = 0;
        startButton.textContent = "PLAY AGAIN";
    }
    else if (playerScore === 5) {
        oneResult.textContent = "Congratz! You have won the game! Another round?";
        playerScore = 0;
        computerScore = 0;
        startButton.textContent = "PLAY AGAIN";
    }
    console.log(`Player score: ${playerScore} Comp score: ${computerScore}`);
}




const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
});

function resetFunction() {
    playerBucket.textContent = "";
    computerBucket.textContent = "";
}

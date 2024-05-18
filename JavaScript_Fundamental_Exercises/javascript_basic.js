"use strict";

/*********************************************
 COMPLETE ROCK, PAPER SCISSORS GAME EXERCISE
********************************************/
/*
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "flex";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
*/
////////////////////////////////////////////////////////////////////////
/*The first step is to build out the function that will generate a random choice for the computer.
The getRandomComputerResult function will be used to get the computer's choice. Inside that function, you should see an options array with "Rock", "Paper", and "Scissors".
Your task is to complete the getRandomComputerResult function so that it returns a random option from the options array.

TIP
You can use Math.random() and Math.floor() to help you get a random whole number. This will represent the index number for the options array.
You can use the random index to access the option from the options array. */

/**
 * Generates a random computer result from a list of options.
 * @returns {string} The randomly selected option.
 */
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}
console.log(getRandomComputerResult());
/*
Step 2
In the game, there will be multiple rounds. The first to reach three points wins the game.

In this step, you will focus on determining if the player has won the round.

Complete the hasPlayerWonTheRound function. This function has two parameters: player and computer. The function should return true if the player has won the round, and false if the player has lost or tied the round.

Here are the criteria for the player to win a round:

If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock"*/
/*
 * Determines if the player has won the round based on their choice and the computer's choice.
 * @param {string} player - The player's choice (Rock, Paper, or Scissors).
 * @param {string} computer - The computer's choice (Rock, Paper, or Scissors).
 * @returns {boolean} - True if the player has won the round, false otherwise.
 */
function hasPlayerWonTheRound(player, computer) {
  if ((player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")) {
    return true;
  } else {
    return false;
  }
}
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

/**Step 3
Now it is time to get the results of the round. Complete the getRoundResults function.

If the player wins the round, update the playerScore by 1 and return the message "Player wins! [player's choice] beats [computer's choice]".

If the computer and player choose the same option, return the message "It's a tie! Both chose [player's choice]".

If the computer wins the round, update the computerScore by 1 and return the message "Computer wins! [computer's choice] beats [player's choice]".

[computer's choice] should be replaced with computerResult while [player's choice] should be replaced with the userOption.

Tips
Remember you can use the hasPlayerWonTheRound function to check if the player wins the round.
You can use template literals or regular string concatenation to build the message.
 */
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (hasPlayerWonTheRound(userOption, computerResult)) {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  } else {
    return `It's a tie! Both chose ${userOption}`;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
/**Step 4
Now it is time to update the scores and the round results message.

Complete the showResults function. The playerScoreSpanElement and computerScoreSpanElement should be updated to show the updated scores of the player and computer.

The roundResultsMsg should also be updated with the result of the round.

Tips

Remember that you learned how to work with the innerText property to update the text content of an element.
You can use the getRoundResults function to get the result of the round. */
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
}

showResults("Rock");
/**Step 5
If you try to play the game, you will see that you can play for an infinite amount of rounds. But the rules state that the first one to three points wins.

Inside your showResults function, you will need to check if the player or computer has reached three points. If either has reached three points, you should display a message indicating the winner.

For example, if the player has won the game, then the winnerMsgElement should be updated to "Player has won the game!". If the computer has won the game, then the winnerMsgElement should be updated to "Computer has won the game!".

If there is a winner, you will want to show the resetGameBtn button and hide the optionsContainer so the player can play again.

Tips

You can use the el.style.display property to show the resetGameBtn button and hide the optionsContainer */
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.dislplay = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.dislplay = "none";
  }
}
/*Step 6
If the player or computer has won the game, there should be an option to reset the game and play again.

Complete the resetGame function that accomplishes the following:

Resets the player and computer scores to 0.
Updates the playerScoreSpanElement and computerScoreSpanElement to display the new scores.
Hides the resetGameBtn button.
Shows the optionsContainer so the player can play again.
Sets the roundResultsMsg and winnerMsgElement to empty strings.
Once you apply those changes, you will have completed the Rock, Paper, Scissors game!
*/
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.dislplay = "flex";
  roundResultsMsg = "";
  winnerMsgElement.innerText = "";
}

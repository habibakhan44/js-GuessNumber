let targetNumber = Math.floor(Math.random() * 30) + 1;
let attemptCount = 0;

function checkGuess() {
    let playerGuess = document.getElementById('userInput').value;
    let feedbackMsg = document.getElementById('feedback');
    attemptCount++;

    if (playerGuess == targetNumber) {
        feedbackMsg.textContent = `Well done! You guessed the number ${targetNumber} in ${attemptCount} attempts.`;
        feedbackMsg.style.color = "green";
    } else if (playerGuess > targetNumber) {
        feedbackMsg.textContent = "Your guess is too high! Try again.";
        feedbackMsg.style.color = "red";
    } else {
        feedbackMsg.textContent = "Your guess is too low! Try again.";
        feedbackMsg.style.color = "black";
    }

    document.getElementById('attemptCount').textContent = `Attempts: ${attemptCount}`;
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 30) + 1;
    attemptCount = 0;
    document.getElementById('userInput').value = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('attemptCount').textContent = "Attempts: 0";
}


let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Choisissez un nombre entre 1 et 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = "Essais : " + attempts;

  if (userGuess === secretNumber) {
    feedback.textContent = `Bravo ! Le nombre était ${secretNumber}.`;
    feedback.style.color = "green";
  } else if (userGuess < secretNumber) {
    feedback.textContent = "C'est plus !";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "C'est moins !";
    feedback.style.color = "orange";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guess").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "Essais : 0";
}

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["pierre", "feuille", "ciseaux"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").textContent = "👤 Joueur : " + playerChoice;
  document.getElementById("computer-choice").textContent = "🤖 Ordinateur : " + computerChoice;
  
  const winnerEl = document.getElementById("winner");
  winnerEl.className = "";

  let winner = "";

  if (playerChoice === computerChoice) {
    winner = "Égalité ! 🤝";
	winnerEl.classList.add("draw");
  } else if (
    (playerChoice === "pierre" && computerChoice === "ciseaux") ||
    (playerChoice === "feuille" && computerChoice === "pierre") ||
    (playerChoice === "ciseaux" && computerChoice === "feuille")
  ) {
    winner = "Tu gagnes ! 🎉";
	winnerEl.classList.add("win");
    playerScore++;
  } else {
    winner = "L'ordi gagne ! 😢";
	winnerEl.classList.add("lose");
    computerScore++;
  }
  winnerEl.textContent = winner;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

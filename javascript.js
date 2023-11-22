function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Your choice (rock, paper, scissor)"), getComputerChoice());
  }
}

function playRound(playerSelection, computerSelection) {
  p = playerSelection.toLowerCase();
  if ((p == "rock" && computerSelection == 1) ||
    (p == "paper" && computerSelection == 2) ||
    (p == "scissor" && computerSelection == 3)) {
    console.log(`${playerSelection} vs ${toStr(computerSelection)} => tied`);
  }
  else if ((p == "rock" && computerSelection == 3) ||
  (p == "paper" && computerSelection == 1) ||
  (p == "scissor" && computerSelection == 2)) {
    console.log(`${playerSelection} vs ${toStr(computerSelection)} => win`);
  }
  else {
    console.log(`${playerSelection} vs ${toStr(computerSelection)} => lose`);
  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function toStr(choice) {
  if (choice == 1) {
    return "rock";
  }
  else if (choice == 2) {
    return "paper";
  }
  else {
    return "scissor";
  }
}

game();
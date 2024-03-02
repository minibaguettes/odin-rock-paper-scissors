const outcome = document.querySelector('#outcome');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const buttons = document.querySelectorAll(".btn");
const heading = document.querySelector('#heading');

const playBtn = document.createElement('button');
heading.appendChild(playBtn);

const cpuChoice = document.querySelector('#cpu-choice');
const cpuIcon = document.createElement('span');
cpuChoice.appendChild(cpuIcon);

resetGame();

playBtn.addEventListener('click', function() {
  prepareGame();
  // play game
  playGame();
});

// prepare game
function prepareGame() {
  resetGame();
  // change "start" to "restart game"
  playBtn.textContent = "Restart Game";

  // show rps choices
  buttons.forEach(function(button) {
    button.style.display = "block";
  });

  // set cpu choice "?"
  cpuIcon.className = 'fa fa-question-circle';
  cpuIcon.style =  'font-size:30vh;color:burlywood';

}

// reset game screen
function resetGame() {
  playBtn.textContent = "Play!";
  // hide rps choices
  buttons.forEach(function(button) {
    button.style.display = "none";
  });
}


// play a game (5 rounds)
function playGame() {
  wins.textContent = 0;
  losses.textContent = 0;
  let choice;  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        if (button.id == 'btnr') {
          choice = 'rock';
        }
        if (button.id == 'btnp') {
          choice = 'paper';
        }
        if (button.id == 'btns') {
          choice = 'scissor';
        }
        if (parseInt(wins.textContent) + parseInt(losses.textContent) < 5) {
          outcome.textContent = playRound(choice, getComputerChoice());
          console.log(wins.textContent, ' + ', losses.textContent, ' = ', parseInt(wins.textContent) + parseInt(losses.textContent));
        }
        else {
          console.log("gameover! play again? <btn>");

        }
      });
    });

}

// play one round
function playRound(playerSelection, computerSelection) {
  if ((playerSelection == computerSelection)) {
    computeScore(0);
    return(`${playerSelection} vs ${computerSelection} => tied`);
  }
  else if ((playerSelection == "rock" && computerSelection == 'scissor') ||
  (playerSelection == "paper" && computerSelection == 'rock') ||
  (playerSelection == "scissor" && computerSelection ==  'paper')) {
    computeScore(1);
    return(`${playerSelection} vs ${computerSelection} => win`);
  }
  else {
    computeScore(-1);
    return(`${playerSelection} vs ${computerSelection} => lose`);
  }
}

function computeScore(result) {
  if (result > 0) {
    wins.textContent = parseInt(wins.textContent) + 1;
  }
  else if (result < 0) {
    losses.textContent = parseInt(losses.textContent) + 1;
  }
}

// randomly generate computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
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
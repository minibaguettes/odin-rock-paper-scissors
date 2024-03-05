const outcome = document.querySelector('#outcome');
const buttons = document.querySelectorAll(".btn");
const heading = document.querySelector('#heading');
heading.classList.add('center');

const losses = document.createElement('div');
losses.classList.add('score');
losses.classList.add('score-l');
heading.appendChild(losses);

const playBtn = document.createElement('button');
playBtn.classList.add('header-init');
heading.appendChild(playBtn);

const wins = document.createElement('div');
wins.classList.add('score');
wins.classList.add('score-w');
heading.appendChild(wins);

const btnr = document.querySelector('#btnr');
const btnp = document.querySelector('#btnp');
const btns = document.querySelector('#btns');
const imgChoices = document.querySelector('#img-choices');

const cpuChoice = document.querySelector('#cpu-choice');
const cpuIcon = document.createElement('span');
cpuChoice.appendChild(cpuIcon);

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

resetGame();

playBtn.addEventListener('click', function() {
  prepareGame();
  // play game
  playGame();
});

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

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
  cpuIcon.innerHTML = "";
  imgChoices.style.display = 'flex';

  wins.classList.add('score-w');
  losses.classList.add('score-l');
}

// reset game screen
function resetGame() {
  playBtn.textContent = "Play!";
  // hide rps choices
  imgChoices.style.display = 'none';
  cpuChoice.style.display = 'none';
  wins.classList.remove('score-w');
  losses.classList.remove('score-l');
}

// end game after 5 rounds
function endGame() {
  console.log("gameover! play again? <btn>");
  playBtn.textContent = "Play Again?";
  imgChoices.style.display = 'none';
  cpuChoice.style.display = 'none';
}

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

// play a game (5 rounds)
function playGame() {
  cpuChoice.style.display = 'block';
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

        hide(button.id);
        
        if (parseInt(wins.textContent) + parseInt(losses.textContent) < 1) {
          let cpuChoice = getComputerChoice();
          cpuIcon.className = '';
          if (cpuChoice == 'rock') {
            cpuIcon.innerHTML = "&#9994";
            cpuIcon.className = '';
          }
          else if (cpuChoice == 'paper') {
            cpuIcon.innerHTML = "&#9995";
            cpuIcon.className = '';

          }
          else {
            cpuIcon.innerHTML = "&#9996";
            cpuIcon.className = '';

          }
          outcome.textContent = playRound(choice, cpuChoice);
          console.log(wins.textContent, ' + ', losses.textContent, ' = ', parseInt(wins.textContent) + parseInt(losses.textContent));
        }
      });
    });

}

// play one round
function playRound(playerSelection, computerSelection) {
  if ((playerSelection == computerSelection)) {
    computeScore(0);
    return('Tied!');
  }
  else if ((playerSelection == "rock" && computerSelection == 'scissor') ||
  (playerSelection == "paper" && computerSelection == 'rock') ||
  (playerSelection == "scissor" && computerSelection ==  'paper')) {
    computeScore(1);
    return('Win!');
  }
  else {
    computeScore(-1);
    return('Lose!');
  }
}

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

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

// hide user options and disable buttons for 1 second before conitnuing to next round 
function hide(c) {
  buttons.forEach(function(button) {
    setTimeout(function(){
      button.disabled = false;
      button.style.display = "block"; 
      cpuIcon.className = 'fa fa-question-circle';
      btnr.classList.add('btn-h');
      btnp.classList.add('btn-h');
      btns.classList.add('btn-h');
      // if end of game, signal end game
      if (parseInt(wins.textContent) + parseInt(losses.textContent) == 1) {
        endGame();
      }
      }, 2000);
    if (button.id != c){
      button.style.display = "none"
    }
    button.disabled = true;
    btnr.classList.remove('btn-h');
    btnp.classList.remove('btn-h');
    btns.classList.remove('btn-h');
  });
}
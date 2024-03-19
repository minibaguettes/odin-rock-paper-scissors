// heading
const heading = document.querySelector('#heading');

const headingRect = document.querySelector('.heading-rect');
headingRect.textContent = 'Bringer of Misfortune';

//cpu
const cpu = document.querySelector('#cpu');

const cpuIdle = 'p5r/p5r-shiki-ouji-idle.png';
const cpuWin = 'p5r/p5r-shiki-ouji-attack.png';

let cpuImg = document.querySelector('#cimg');
cpuImg.src = cpuIdle;

const cpuScoreImg = document.querySelector('#cpu-score-img');
cpuScoreImg.src = 'p5r/p5r-cpu-hp-5.png';

let cpuChoice = document.createElement('span');
let cpuScore = document.createElement('span');
cpuScore.classList.add('cpuScore');
cpu.appendChild(cpuChoice);
cpu.appendChild(cpuScore);

let cpuTemp = cpuScoreImg.src;


// user
const user = document.querySelector('#user');

const jokerIdle = 'p5r/p5r-joker-idle.png';
const jokerWin = 'p5r/p5r-joker-win.png';
const jokerHurt = 'p5r/p5r-joker-hurt.png';

let userImg = document.querySelector('#uimg');
userImg.src = jokerIdle;

const buttons = document.querySelectorAll(".btn");

const userBg = document.querySelector('#user-bg');

/*const btnr = document.querySelector('#btnr');
const btnp = document.querySelector('#btnp');
const btns = document.querySelector('#btns');*/

// footing
const footing = document.querySelector('#footing');
const footingScore = document.querySelector('.footing-score');
const footingScoreHP = document.querySelector('.footing-score-HP');

let userScore = document.createElement('span');
userScore.classList.add('userScore');
const userScoreImg = document.querySelector('#user-score-img');
userScoreImg.src = 'p5r/p5r-user-score.png';
footingScore.appendChild(userScore);

const dialogue = document.querySelector('#dialogue');
dialogue.classList.add('hide');
const dialogueImg = document.createElement('img');
dialogueImg.src = 'p5r/p5r-dialogue.png';
dialogueImg.classList.add('dialogue-img');
const dialogueText = document.createElement('span');
dialogueText.classList.add('dialogue-text');
dialogue.appendChild(dialogueImg);
dialogue.appendChild(dialogueText);

// other
const scene = document.querySelector('#scene');
const sceneBtns = document.querySelector('#scene-btns');
const homeBtn = document.querySelector('#home');
const playBtn = document.querySelector('#play');

const startScreen = document.createElement('img');
startScreen.src = 'p5r/p5r-start-screen.png';
startScreen.classList.add('start-screen');

const loadingScreen = document.createElement('img');
loadingScreen.src = 'p5r/p5r-general-loading-screen.png';
loadingScreen.classList.add('loading-screen');

const critScreen = document.createElement('img');
critScreen.src = 'p5r/p5r-crit.png';
critScreen.classList.add('crit-screen');

const victoryScreen = document.createElement('img');
victoryScreen.src = 'p5r/p5r-victory.png';
victoryScreen.classList.add('victory-screen');

const victoryEnd = document.createElement('img');
victoryEnd.src = 'p5r/p5r-win-end.png';
victoryEnd.classList.add('victory-end');

const loseLoad = document.createElement('img');
loseLoad.src = 'p5r/p5r-velvet-room-loading.png';
loseLoad.classList.add('lose-load');

const loseEnd = document.createElement('img');
loseEnd.src = 'p5r/p5r-velvet-room.png';
loseEnd.classList.add('lose-end');

const loseDialogue = document.createElement('span');
loseDialogue.textContent = 'You have lost.'
loseDialogue.classList.add('lose-dialogue');

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

playBtn.addEventListener('click', function() {
  preGame();
});

homeBtn.addEventListener('click', function() {
  homeScreen();
});

let keyChoice = '';
const handleKeys = (e) => {
  if (e.key == 'a') {
    keyChoice = 'rock';
  }
  else if (e.key == 's') {
    keyChoice = 'paper';
  }
  else if (e.key == 'd') {
    keyChoice = 'scissor';
  }
  console.log(playRound(keyChoice, getComputerChoice()));
}

cpuScoreImg.addEventListener('mouseover', function() {
  cpuScore.classList.toggle('hp-toggle');
  cpuScoreImg.src = 'p5r/p5r-cpu-hp-0.png';
});

cpuScoreImg.addEventListener('mouseout', function() {
  cpuScore.classList.toggle('hp-toggle');
  cpuScoreImg.src = cpuTemp;
});

firstLoad();

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

// prepare game
function preGame() {
  console.log('start');
  setTimeout(function() {
    setTimeout(function() {

      /* last minute fixes */

      // remove loading screen
      if (loadingScreen.parentElement === scene ){
        scene.removeChild(loadingScreen);
      }
      loadingScreen.classList.remove('fade-out');

      /* play */
      
      playGame();

    }, 1000);

    /* reset everything */

    // fix loading screen
    sceneBtns.classList.remove('fade-out');
    loadingScreen.classList.remove('fade-in');
    if (startScreen.parentElement === scene) {
      scene.removeChild(startScreen);
    }
    // reset scores
    cpuScore.textContent = 1;
    cpuScoreImg.src = 'p5r/p5r-cpu-hp-' + cpuScore.textContent + '.png'
    userScore.textContent = 1;
    // reset images
    userImg.classList.add('userImgIdle');
    cpuImg.classList.add('cpuImgIdle');
    // remove lose scene
    if (loseEnd.parentElement === scene) {
      scene.removeChild(loseEnd);
      scene.removeChild(loseLoad);
      scene.removeChild(loseDialogue);
      scene.classList.remove('blk-screen');
    }
    if (victoryEnd.parentElement === scene) {
      scene.removeChild(victoryEnd);
      scene.removeChild(victoryScreen);
      scene.removeChild(critScreen);
    }
    // fix / hide buttons
    sceneBtns.id = 'scene-btns-fight';
    playBtn.classList.add('hide');
    homeBtn.classList.remove('hide');
    loadingScreen.classList.add('fade-out');

  }, 1000);

  /* loading screen */

  scene.appendChild(loadingScreen);
  loadingScreen.classList.add('fade-in');
  sceneBtns.classList.remove('fade-in');
  sceneBtns.classList.add('fade-out');

}

function firstLoad() {
  scene.appendChild(startScreen);
  if (loadingScreen.parentElement === scene ){
    scene.removeChild(loadingScreen);
  }
  sceneBtns.id = 'scene-btns-home';
  homeBtn.classList.add('hide');
}

// show home screen
function homeScreen() {
  console.log('home');
  setTimeout(function() {
    setTimeout(function() {

      // remove loading screen
      loadingScreen.classList.add('fade-out');
      if (loadingScreen.parentElement === scene) {
        scene.removeChild(loadingScreen);
      }
      loadingScreen.classList.remove('fade-out');

    }, 1000);

    /* set home screen up */

    loadingScreen.classList.remove('fade-in');
    playBtn.classList.remove('hide');
    sceneBtns.classList.remove('hide');
    playBtn.classList.add('play-home');
    playBtn.textContent = 'Play';
    startScreen.classList.add('fade-in');
    sceneBtns.id = 'scene-btns-home';
    sceneBtns.classList.remove('fade-out');
    sceneBtns.classList.add('fade-in');
    scene.appendChild(startScreen);
  }, 1000);

  /* loading screen */

  sceneBtns.classList.remove('fade-in');
  sceneBtns.classList.add('fade-out');
  sceneBtns.classList.add('hide');
  scene.appendChild(loadingScreen);
  loadingScreen.classList.add('fade-in');
  homeBtn.classList.add('hide');
}

// end game after 5 rounds
function endGame() {
  // if user wins
  if (parseInt(cpuScore.textContent) <= 0) {
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          // *** - show victory end screen
          scene.appendChild(victoryEnd);
          // **** - show buttons
          sceneBtns.classList.remove('hide');
          playBtn.classList.remove('play-home')
          playBtn.classList.remove('hide');
          sceneBtns.id = 'scene-btns-lose';
          playBtn.textContent = 'Play again?';
        }, 100);
        // ** - show victory screen
        victoryScreen.classList.add('ttx0');
      }, 2000);
      // * - fade in/out crit visual
      scene.appendChild(critScreen);
      scene.appendChild(victoryScreen);
    }, 1000);
  }
  // if user loses
  else {
    setTimeout(function() {
      setTimeout(function () {
        // *** - show lose end screen
        scene.appendChild(loseEnd);
        scene.classList.add('blk-screen');
        scene.appendChild(loseDialogue);
        setTimeout(function () {
          // **** - show buttons
          sceneBtns.classList.remove('hide');
          playBtn.classList.remove('play-home')
          playBtn.classList.remove('hide');
          sceneBtns.id = 'scene-btns-lose';
          playBtn.textContent = 'Play again?';
        }, 1000);
      }, 1000);
      // ** - show end loading screen
      scene.appendChild(loseLoad);
    }, 1000);
    // * - wait 1s before loading screen
  }
}

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

// play a game (5 rounds)
function playGame() { 
console.log('cpu: ' + cpuScore.textContent);
console.log('user: ' + userScore.textContent);
  let choice;  
  document.addEventListener('keydown', handleKeys);
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
        cpuChoice = getComputerChoice();
        console.log(playRound(choice, cpuChoice));
console.log('cpu: ' + cpuScore.textContent);
console.log('user: ' + userScore.textContent);
        if (parseInt(userScore.textContent) <= 0 || parseInt(cpuScore.textContent) <= 0) {
          endGame();
          return;
        }
      });
    });

}

// play one round
function playRound(playerSelection, computerSelection) {
  console.log(computerSelection + ' (cpu) vs ' +  playerSelection + ' (user)');
  if ((playerSelection == computerSelection)) {
    computeScore(0);
    userTied(playerSelection, computerSelection);
    return('Tied!');
  }
  else if ((playerSelection == "rock" && computerSelection == 'scissor') ||
  (playerSelection == "paper" && computerSelection == 'rock') ||
  (playerSelection == "scissor" && computerSelection ==  'paper')) {
    computeScore(1);
    userWin(playerSelection, computerSelection);
    return('Win!');
  }
  else {
    computeScore(-1);
    userHurt(playerSelection, computerSelection);
    return('Lose!');
  }
}

// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

function computeScore(result) {
  if (result > 0) {
    cpuScore.textContent = parseInt(cpuScore.textContent) - 1;
  }
  else if (result < 0) {
    userScore.textContent = parseInt(userScore.textContent) - 1;
  }
  cpuScoreImg.src = 'p5r/p5r-cpu-hp-' + cpuScore.textContent + '.png'
  cpuTemp = cpuScoreImg.src;

  roundWait();
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

function userTied(playerSelection, computerSelection) {
  userImg.src = jokerIdle;
  userImg.classList.remove('userImgWin');
  userImg.classList.add('userImgIdle');

  cpuImg.src = cpuIdle;
  cpuImg.classList.remove('cpuImgWin');
  cpuImg.classList.add('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' is tied with ' + computerSelection + '.';
}

function userWin(playerSelection, computerSelection){
  userImg.src = jokerWin;
  userImg.classList.remove('userImgIdle');
  userImg.classList.add('userImgWin');

  cpuImg.src = cpuIdle;
  cpuImg.classList.remove('cpuImgWin');
  cpuImg.classList.add('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' wins against ' + computerSelection + '!';
}

function userHurt(playerSelection, computerSelection){
  userImg.src = jokerHurt;
  userImg.classList.remove('userImgWin')
  userImg.classList.add('userImgIdle');

  cpuImg.src = cpuWin;
  cpuImg.classList.add('cpuImgWin');
  cpuImg.classList.remove('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' loses against ' + computerSelection + '! I lost..';
}

function roundWait() {
  setTimeout(function() {
    userTied();
    dialogue.classList.add('hide');
    userBg.classList.remove('hide'); 
    document.addEventListener('keydown', handleKeys);
    buttons.forEach(function(button) {
      button.disabled = false;
      button.classList.remove('hide');
    });
    playBtn.disabled = false;
  homeBtn.disabled = false;
  }, 2000);

  buttons.forEach(function(button) {
    button.disabled = true;
    button.classList.add('hide');
  });
  playBtn.disabled = true;
  homeBtn.disabled = true;
  dialogue.classList.remove('hide');
  userBg.classList.add('hide'); 
  document.removeEventListener('keydown', handleKeys);
  sceneBtns.classList.add('hide');
}


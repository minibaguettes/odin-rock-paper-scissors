// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                         VARIABLES / ELEMENTS                          //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //

/*~*~*~*~  heading - contains title  ~*~*~*~*/
const heading = document.querySelector('#heading');

// get title div
const headingRect = document.querySelector('.heading-rect');
headingRect.textContent = 'Bringer of Misfortune';

/*~*~*~*~  cpu - contains cpu (right) half of screen  ~*~*~*~*/
/*             - cpu image, cpu health image, cpu score  */

const cpu = document.querySelector('#cpu');

// assign images to var
const cpuIdle = 'p5r/cpu/p5r-shiki-ouji-idle.png';
const cpuWin = 'p5r/cpu/p5r-shiki-ouji-attack.png';

// get cpu image and set to init image
let cpuImg = document.querySelector('#cimg');
cpuImg.src = cpuIdle;

// get cpu score image and set to init image
const cpuScoreImg = document.querySelector('#cpu-score-img');
cpuScoreImg.src = 'p5r/cpu-hp/p5r-cpu-hp-5.png';

// get cpu choice and score
let cpuChoice = document.createElement('span');
let cpuScore = document.createElement('span');
cpuScore.classList.add('cpuScore');
cpu.appendChild(cpuChoice);
cpu.appendChild(cpuScore);

// store cpu image temporarily
let cpuTemp = cpuScoreImg.src;


/*~*~*~*~  user - contains user (left) half of screen  ~*~*~*~*/
/*              - user image, user choice buttons, user background */

const user = document.querySelector('#user');

// assign images to var
const jokerIdle = 'p5r/user/p5r-joker-idle.png';
const jokerWin = 'p5r/user/p5r-joker-win.png';
const jokerHurt = 'p5r/user/p5r-joker-hurt.png';

// get user image and set init
let userImg = document.querySelector('#uimg');
userImg.src = jokerIdle;

// get user choice buttons and background
const buttons = document.querySelectorAll(".btn");
const userBg = document.querySelector('#user-bg');
const btnr = document.querySelector('#btnr');
const btnp = document.querySelector('#btnp');
const btns = document.querySelector('#btns');

/*~*~*~*~  footing - contains user dialogue, user dialogue image, user score image, user score  ~*~*~*~*/

const footing = document.querySelector('#footing');

// get user score image
const footingScore = document.querySelector('.footing-score');
const footingScoreHP = document.querySelector('.footing-score-HP');

// set user score and image, set image to init
let userScore = document.createElement('span');
userScore.classList.add('userScore');
const userScoreImg = document.querySelector('#user-score-img');
userScoreImg.src = 'p5r/user/p5r-user-score.png';
footingScore.appendChild(userScore);

// get dialogue and dialogue image, set image to init
const dialogue = document.querySelector('#dialogue');
dialogue.classList.add('hide');
const dialogueImg = document.createElement('img');
dialogueImg.src = 'p5r/user/p5r-dialogue.png';
dialogueImg.classList.add('dialogue-img');
const dialogueText = document.createElement('span');
dialogueText.classList.add('dialogue-text');
dialogue.appendChild(dialogueImg);
dialogue.appendChild(dialogueText);

/*~*~*~*~  scene - contains other scenes  ~*~*~*~*/
/*               - start screen, victory transition screens, victory screen, lose transition screens, lose screen, loading screen */

// scene parent element
const scene = document.querySelector('#scene');

// scene buttons - home, play
const sceneBtns = document.querySelector('#scene-btns');
const homeBtn = document.querySelector('#home');
const playBtn = document.querySelector('#play');

// start screen
const startScreen = document.createElement('img');
startScreen.src = 'p5r/screens/p5r-start-screen.png';
startScreen.classList.add('start-screen');

// loading screen
const loadingScreen = document.createElement('img');
loadingScreen.src = 'p5r/screens/p5r-general-loading-screen.png';
loadingScreen.classList.add('loading-screen');

// victory screen transition - from fight to crit to victory 
const critScreen = document.createElement('img');
critScreen.src = 'p5r/screens/p5r-crit.png';
critScreen.classList.add('crit-screen');

// victory screen - colored victory screen; beginning
const victoryScreen = document.createElement('img');
victoryScreen.src = 'p5r/screens/p5r-victory.png';
victoryScreen.classList.add('victory-screen');

// victory screen - black and white victory screen; end
const victoryEnd = document.createElement('img');
victoryEnd.src = 'p5r/screens/p5r-win-end.png';
victoryEnd.classList.add('victory-end');

// lose screen transition - from fight to load to lose 
const loseLoad = document.createElement('img');
loseLoad.src = 'p5r/screens/p5r-velvet-room-loading.png';
loseLoad.classList.add('lose-load');

// lose screen - lose screen; end
const loseEnd = document.createElement('img');
loseEnd.src = 'p5r/screens/p5r-velvet-room.png';
loseEnd.classList.add('lose-end');

// lose screen dialogue
const loseDialogue = document.createElement('span');
loseDialogue.textContent = 'You have lost.'
loseDialogue.classList.add('lose-dialogue');


// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                          EVENT LISTENERS                              //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //


// listen to play button
playBtn.addEventListener('click', function() {
  preGame();
});

// listen to home button
homeBtn.addEventListener('click', function() {
  homeScreen();
});

// listen to user choice via buttons - rock, paper, scissor
let choice = '';
btnr.addEventListener('click', function() {
  choice = 'rock';
  playGame();
});
btnp.addEventListener('click', function() {
  choice = 'paper';
  playGame();
});
btns.addEventListener('click', function() {
  choice = 'scissor';
  playGame();
});

// listen to user choice via a s d keys
let keyChoice = '';
const handleKeys = (e) => {
  if (e.key == 'a') {
    keyChoice = 'rock';
    playGame();
  }
  else if (e.key == 's') {
    keyChoice = 'paper';
    playGame();
  }
  else if (e.key == 'd') {
    keyChoice = 'scissor';
    playGame();
  }
  else {
    keyChoice = '';
  }
  console.log(keyChoice);
}
document.addEventListener('keydown', handleKeys);

// look for mouse hover on cpu score image - hide health image, show numerical value
cpuScoreImg.addEventListener('mouseover', function() {
  cpuScore.classList.toggle('hp-toggle');
  cpuScoreImg.src = 'p5r/cpu-hp/p5r-cpu-hp-0.png';
});

// look for mouse hover off cpu score image - hide numerical value, show health image
cpuScoreImg.addEventListener('mouseout', function() {
  cpuScore.classList.toggle('hp-toggle');
  cpuScoreImg.src = cpuTemp;
});


// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                                                                       //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //


firstLoad();


// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                  GAME BEGINNING / ENDING PREPARATIONS                 //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //


// prepare game 
function preGame() {
  setTimeout(function() {
    setTimeout(function() {

      // (3) remove loading screen

      if (loadingScreen.parentElement === scene ){
        scene.removeChild(loadingScreen);         // remove loading screen
      }
      loadingScreen.classList.remove('fade-out'); // reset loading screen
      homeBtn.classList.remove('hide');           // reset home btn

    }, 1000);

    // (2) fix loading screen and reset elements

    // fix loading screen
    sceneBtns.classList.remove('fade-out');     // reset scene buttons
    loadingScreen.classList.remove('fade-in');  // reset loading screen
    if (startScreen.parentElement === scene) {
      scene.removeChild(startScreen);           // remove start screen if present
    }
    // reset user and cpu scores and score image
    cpuScore.textContent = 5;
    cpuScoreImg.src = 'p5r/cpu-hp/p5r-cpu-hp-5.png'
    userScore.textContent = 5;
    // reset user and cpu images
    userImg.classList.add('userImgIdle');
    cpuImg.classList.add('cpuImgIdle');
    // remove lose scene
    if (loseEnd.parentElement === scene) {
      scene.removeChild(loseEnd);
      scene.removeChild(loseLoad);
      scene.removeChild(loseDialogue);
      scene.classList.remove('blk-screen');
    }
    // remove victory scene
    if (victoryEnd.parentElement === scene) {
      scene.removeChild(victoryEnd);
      scene.removeChild(victoryScreen);
      scene.removeChild(critScreen);
    }
    // reset buttons
    sceneBtns.id = 'scene-btns-fight';
    playBtn.classList.add('hide');
    // fade out loading screen
    loadingScreen.classList.add('fade-out');

  }, 1000);

  // (1) set loading screen
  scene.appendChild(loadingScreen);
  loadingScreen.classList.add('fade-in');   // fade in loading screen
  sceneBtns.classList.remove('fade-in');    // reset scene buttons
  sceneBtns.classList.add('fade-out');      // fade out scene buttons
}

// first time loading the site; this is home screen
function firstLoad() {
  scene.appendChild(startScreen);           // open with start screen
  if (loadingScreen.parentElement === scene ){
    scene.removeChild(loadingScreen);       // make sure loading screen is not present
  }
  sceneBtns.id = 'scene-btns-home';         // start screen buttons
  homeBtn.classList.add('hide');            // hide home button since this is technically home
}

// return to home screen
function homeScreen() {
  setTimeout(function() {
    setTimeout(function() {

      // (3) remove loading screen
      loadingScreen.classList.add('fade-out');    // fade out loading screen
      if (loadingScreen.parentElement === scene) {
        scene.removeChild(loadingScreen);         // remove loading screen
      }
      loadingScreen.classList.remove('fade-out'); // reset loading screen
      playBtn.disabled = false;
      playBtn.classList.remove('hide');           // show play button
      sceneBtns.classList.remove('fade-out');     // reset scene buttons
      sceneBtns.classList.add('fade-in');         // fade in scene buttons

    }, 1000);

    // (2) set up home page

    loadingScreen.classList.remove('fade-in');  // reset loading screen
    playBtn.classList.add('play-home');         // change play button to home screen play button
    playBtn.textContent = 'Play';               // ^
    startScreen.classList.add('fade-in');       // fade in start screen
    sceneBtns.id = 'scene-btns-home';           // start screen buttons
    scene.appendChild(startScreen);             // add start screen

  }, 1000);

  // (1) set up transition with loading screen

  sceneBtns.classList.remove('fade-in');      // reset scene buttons
  sceneBtns.classList.add('fade-out');        // fade out scene buttons
  scene.appendChild(loadingScreen);           // add loading screen
  loadingScreen.classList.add('fade-in');     // fade in loading screen
  homeBtn.classList.add('hide');              // hide home button
  playBtn.classList.add('hide');              // hide play button
  playBtn.disabled = true;
}

// end game
function endGame() {
  homeBtn.classList.add('hide');
  // if user wins
  if (parseInt(cpuScore.textContent) <= 0) {
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {

          // (3) fix buttons

          homeBtn.classList.remove('hide');
          sceneBtns.classList.remove('hide');     // show scene buttons
          playBtn.classList.remove('play-home')   // set play button to ending play button
          playBtn.classList.remove('hide');       // show play button
          sceneBtns.id = 'scene-btns-end';       // set scene buttons to ending buttons
          playBtn.textContent = 'Play again?';

        }, 1000);
 
        // (2) show victory screen

        victoryScreen.classList.add('ttx0');      // translate victory screen after crit transition
        scene.appendChild(victoryEnd);            // add victory end screen (will show after victory screen transition)

      }, 2000);

      // (1) transition crit visual

      scene.appendChild(critScreen);              // add crit screen; transition styled
      scene.appendChild(victoryScreen);           // add vistory screen (will show after crit screen transition)

    }, 1000);

    dialogueText.textContent += ' I win!';

  }
  // if user loses
  else {
    setTimeout(function() {
      setTimeout(function () {

        // (3) show losing end screen

        scene.appendChild(loseEnd);             // add losing end screen
        scene.classList.add('blk-screen');      // add black overlay
        scene.appendChild(loseDialogue);        // add losing dialogue

       setTimeout(function () {

          // (4) fix buttons

          homeBtn.classList.remove('hide');
          sceneBtns.classList.remove('hide');   // show scene buttons
          playBtn.classList.remove('play-home') // set play button to ending play button
          playBtn.classList.remove('hide');     // show play button
          sceneBtns.id = 'scene-btns-end';     // set scene buttons to ending buttons
          playBtn.textContent = 'Play again?';

       }, 1000);

       // (3) let transition finish

     }, 1000);

      // (2) add losing loading screen
      scene.appendChild(loseLoad);              // transition styled 

   }, 1000);

    // (1) wait before transitioning to loading screen
    dialogueText.textContent += ' I lost...';

  }
  return;
}


// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                           GAME ROUNDS / PLAY                          //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //


// play a game
function playGame() { 
  // detect button press OR key press
  if (choice != '' || keyChoice != '') {
    console.log('choice: ' + choice);
    console.log('keychoice: ' + keyChoice);
    // generate cpu choice
    cpuChoice = getComputerChoice();
    // play round
    if (choice != '') { 
      console.log(playRound(choice, cpuChoice))
    }
    else {
      console.log(playRound(keyChoice, cpuChoice));
    } 
    // if user and cpu score == 0, end game
    if (parseInt(userScore.textContent) == 0 || parseInt(cpuScore.textContent) == 0) {
      endGame();
      choice = '';
      keyChoice = '';
      return;
    }
  }
}

// play one round
function playRound(playerSelection, computerSelection) {
  console.log(computerSelection + ' (cpu) vs ' +  playerSelection + ' (user)');
  // tied
  if ((playerSelection == computerSelection)) {
    computeScore(0);
    userTied(playerSelection, computerSelection);
    return('Tied!');
  }
  // user win
  else if ((playerSelection == "rock" && computerSelection == 'scissor') ||
  (playerSelection == "paper" && computerSelection == 'rock') ||
  (playerSelection == "scissor" && computerSelection ==  'paper')) {
    computeScore(1);
    userWin(playerSelection, computerSelection);
    return('Win!');
  }
  // user lose
  else {
    computeScore(-1);
    userHurt(playerSelection, computerSelection);
    return('Lose!');
  }
}


// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //
//                               HELPERS                                 //
// *~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~ //


// calculate user and cpu score
function computeScore(result) {
  // user win, deduct from cpu score
  if (result > 0 && parseInt(cpuScore.textContent) > 0) {
    cpuScore.textContent = parseInt(cpuScore.textContent) - 1;
  }
  // user lose, deduct from user score
  else if (result < 0 && parseInt(userScore.textContent) > 0) {
    userScore.textContent = parseInt(userScore.textContent) - 1;
  }
  // set cpu score img to appropriate img
  cpuScoreImg.src = 'p5r/cpu-hp/p5r-cpu-hp-' + cpuScore.textContent + '.png'
  // set cpuTemp to the new cpu score img (for hovering purposes)
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

// handle images and dialogue when tied
function userTied(playerSelection, computerSelection) {
  userImg.src = jokerIdle;
  userImg.classList.remove('userImgWin');
  userImg.classList.add('userImgIdle');

  cpuImg.src = cpuIdle;
  cpuImg.classList.remove('cpuImgWin');
  cpuImg.classList.add('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' is tied with ' + computerSelection + '.';
}

// handle images and dialogue when user wins
function userWin(playerSelection, computerSelection){
  userImg.src = jokerWin;
  userImg.classList.remove('userImgIdle');
  userImg.classList.add('userImgWin');

  cpuImg.src = cpuIdle;
  cpuImg.classList.remove('cpuImgWin');
  cpuImg.classList.add('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' wins against ' + computerSelection + '!';
}

// handle images and dialogue when user loses
function userHurt(playerSelection, computerSelection){
  userImg.src = jokerHurt;
  userImg.classList.remove('userImgWin')
  userImg.classList.add('userImgIdle');

  cpuImg.src = cpuWin;
  cpuImg.classList.add('cpuImgWin');
  cpuImg.classList.remove('cpuImgIdle');

  dialogueText.textContent = playerSelection + ' loses against ' + computerSelection + '!';
}

// pause between each round
function roundWait() {
  setTimeout(function() {

    // (2) after wait time
    
    // revert to neutral state
    userTied();

    // enable and show button options; accept key inputs
    buttons.forEach(function(button) {
      button.disabled = false;
      button.classList.remove('hide');
    });
    document.addEventListener('keydown', handleKeys);

    // enable scene buttons
    playBtn.disabled = false;
    homeBtn.disabled = false;

    // fix others
    dialogue.classList.add('hide');     // hide dialogue
    userBg.classList.remove('hide');    // show user background
    sceneBtns.classList.remove('hide');      // show scene buttons
    choice = '';                        // reset user choice

  }, 2000);

  // (1) during wait time

  // disable and hide button options; ignore key inputs
  buttons.forEach(function(button) {
    button.disabled = true;
    button.classList.add('hide');
  });
  document.removeEventListener('keydown', handleKeys);

  // disable scene buttons
  playBtn.disabled = true;
  homeBtn.disabled = true;

  // fix others
  dialogue.classList.remove('hide');    // show dialogue
  userBg.classList.add('hide');         // hide userbackground
  sceneBtns.classList.add('hide');      // hide scene buttons
}


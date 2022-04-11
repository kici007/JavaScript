const computerChoise = document.getElementById('computer-choice');
const userChoiseDisplay = document.getElementById('user-choise');
const endResult = document.getElementById('result');
const possibleChoises = document.querySelectorAll('button');
let userChoise;
let compChoise;
let res;

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
  userChoise = e.target.id;
  userChoiseDisplay.innerHTML = userChoise;
  generateComputerChoise();
  getResult();
}))

function generateComputerChoise(){
  const randNum = Math.floor(Math.random() * possibleChoises.length) + 1;

  if (randNum === 1){
    compChoise = 'rock';
  }

  if (randNum === 2){
    compChoise = 'paper';
  }

  if (randNum === 3){
    compChoise = 'scissors';
  }
  
  computerChoise.innerHTML = compChoise;
}

function getResult(){
  if (compChoise === userChoise){
    res = 'its a draw.';
  }
  if (compChoise === 'rock' && userChoise === 'paper'){
    res = 'you win!';
  }
  if (compChoise === 'rock' && userChoise === 'scissors'){
    res = 'you lost!';
  }
  if (compChoise === 'paper' && userChoise === 'scissors'){
    res = 'you win!';
  }
  if (compChoise === 'paper' && userChoise === 'rock'){
    res = 'you lose!';
  }
  if (compChoise === 'scissors' && userChoise === 'rock'){
    res = 'you win!';
  }
  if (compChoise === 'scissors' && userChoise === 'paper'){
    res = 'you lose!';
  }

  endResult.innerHTML = res;
}
